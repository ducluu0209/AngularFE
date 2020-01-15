import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { IProduct } from '../IProduct';
import { Category } from '../category';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  headers: string[];
  products: IProduct[];
  uploadFile: File;
  product: IProduct;
  categories: Category[];
  confirmDelete: any;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private toast: AppComponent,
    private router: Router
    ) {

   }
  formProduct = this.fb.group({
      productId: '',
      productName: '',
      description: '',
      price: '',
      size: '',
      categoryId: 0,
      genderFor: '',
      image: ''
  });

  ngOnInit() {
    this.api.getProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      return this.products = data;
    });

    this.api.getAllCategories().subscribe((data: Category[]) => {
      console.log(data);
      return this.categories = data;
    });
  }

  removeProduct(id: number) {
    console.log('id remove: ', id);
    let answer = confirm("Ban dong y xoa san pham ");
    if (answer) {
      this.api.deleteProductById(id).subscribe( data => {
        console.log('Data delete: ', data);
        return this.confirmDelete = data;
      });
    } else {
      alert("Ban chua xoa san pham");
    }
  }

  createProduct() {
    console.log(this.formProduct.value);
    this.api.uploadImageFunction(this.uploadFile).subscribe(
      res => {
        if (res.data) {
          this.formProduct.value.image = res.data.link;
          this.product = this.formProduct.value;
          //console.log('Form: ', this.formProduct.value.image);
          //console.log('Product:  ', this.product.image);
          this.product.image = res.data.link;
          this.api.createProduct(this.product).subscribe(
            response => {
              this.toast.showSuccess();
              this.router.navigateByUrl('admin');
            }
          );
        }
      }
    );
  }

  handleFile(file: FileList) {
     this.uploadFile = file.item(0);
  }

}
