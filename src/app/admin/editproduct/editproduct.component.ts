import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { IProduct } from '../../IProduct';
import { Category } from '../../category';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
// import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productId: number;
  headers: string[];
  products: IProduct[];
  uploadFile: File;
  product: IProduct;
  categories: Category[];
  productIdForEdit: number;
  categoryName: string;
  categoryId: number;
  productData: any;

  productName;
  description;
  genderFor;
  size;
  price;
  image;

  constructor(
    private fb: FormBuilder,
    private activateRouter: ActivatedRoute,
    private api: ApiService,
    private toast: AppComponent,
    private router: Router
    ) {

    }

  ngOnInit() {
    this.getAllCategories();
    this.getProductById();
    // this.getCategoryById();
  }

  onSubmit() {
    console.log('ffffff,,,,,', this.productName);
    console.log('ffffff,,,,,', this.categoryId);
  }


  async updateProduct() {

  const productId = this.product.productId;
  this.productData = {
      productName: this.productName,
      description: this.description,
      price: this.price,
      size: this.size,
      categoryId: this.categoryId,
      genderFor: this.genderFor,
      image: this.image
    }

    // console.log('this.formProduct.value...', this.formProduct.value)
    // this.product = this.formProduct.value;
  console.log(this.productData)

  this.api.updateProduct(this.productData, productId).subscribe(
      res => {
        console.log('res ........', res);
        this.toast.editSuccess();
      }
    );

  }

  // updateProduct() {
  //   console.log(typeof this.formProduct.value);
  //   this.product = this.formProduct.value;
  //   this.api.updateProduct(this.product,).subscribe();
  // }

  uploadImg(file: FileList) {
    this.uploadFile = file.item(0);
  }

  getProductById() {
    this.productIdForEdit = +this.activateRouter.snapshot.paramMap.get('productID');
    return this.api.getProductById(this.productIdForEdit).subscribe(
        productEdit => {

          this.productName = productEdit.productName;
          this.price = productEdit.price;
          this.size = productEdit.size;
          this.description = productEdit.description;
          this.image = productEdit.image;
          this.genderFor = productEdit.genderFor;
          this.categoryId = productEdit.category_id;

          this.product = productEdit;
          this.getCategoryById();
      });



  }

  getAllCategories() {
    this.api.getAllCategories().subscribe((data: Category[]) => {
      console.log(data);
      return this.categories = data;
    });
  }

  getCategoryById() {
    console.log('Category ID- get category by id: ', this.categoryId);
    this.api.getCategoryById(this.categoryId).subscribe(
      (data: Category) => {
        console.log('Category:  ', data);
        return this.categoryName = data.categoryName;
    });
  }

}
