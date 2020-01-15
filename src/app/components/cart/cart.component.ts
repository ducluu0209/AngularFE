import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { IProduct } from 'src/app/IProduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  headers: string[];
  products: IProduct[];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      return this.products = data;
    });
  }

}
