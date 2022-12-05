import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='http://localhost:8080/products';//the backend api url

  constructor(private http:HttpClient) { }//declare an instance of http client
 //get all products
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl+'/all');
  }
  //get product by id
  getProduct(id:number):Observable<Product>{
    return this.http.get<Product>(this.apiUrl+'/product/'+id);
  }
  //add product
  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl+'/add',product);
  }

}
