import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IProduct } from "src/app/IProduct";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  headers: string[];
  products: IProduct[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      return this.products = data;
    });
  }
  // this.vehicleService.getAll().subscribe( (data: VehicleModel[]) => {
  //   // console.log(data);
  //   return this.vehicles = data;
  // });
}
