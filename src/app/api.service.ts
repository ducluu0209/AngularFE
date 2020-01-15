import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/IProduct';
import { Category } from './category';
//import { Product } from 'src/app/components/products/product';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //private apiUrl = 'http://luuddshoeshop.herokuapp.com/api/';
  //private apiUrl = 'http://localhost:8080/api/';
  private apiUrl = 'https://luuddshoeshop.herokuapp.com/api/';
  private uploadImageApi = 'https://api.imgur.com/3/image';
  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpHeaderImage = {
    headers: new HttpHeaders({
      Authorization: 'Client-ID 546c25a59c58ad7',
      'Content-Type': 'application/json',
          })
  };

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.apiUrl + 'products');
  }

  updateProduct(data: IProduct, productId: any): Observable<IProduct> {
    console.log(' product data: ', data );
    console.log(' product id: ', productId);
    return this.http.put<IProduct>(this.apiUrl + 'product/' + productId , data, this.httpHeader);
  }

  createProduct(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.apiUrl + 'products', data, this.httpHeader);
  }

  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.apiUrl + 'products/' + productId);
  }

  uploadImageFunction(file: File): Observable<any> {
    return this.http.post(
      this.uploadImageApi,
       file,
       this.httpHeaderImage
       );
  }

  getAllCategories(): Observable<Category[]> {
    //console.log(this.localapiUrl + 'category');
    return this.http.get<Category[]>(this.apiUrl + 'category');
  }

  getCategoryById(categoryId: number): Observable<Category> {
    console.log(this.apiUrl + 'category/' + categoryId );
    return this.http.get<Category>(this.apiUrl + 'category/' + categoryId);
  }

  deleteProductById(productId: number): Observable<IProduct> {
    console.log(this.apiUrl+ 'product/' + productId);
    return this.http.delete<IProduct>(this.apiUrl + 'product/' + productId);
  }

}
