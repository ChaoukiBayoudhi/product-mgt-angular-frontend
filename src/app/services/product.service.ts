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
    return this.http.post<Product>(this.apiUrl+'/add',product); //post request have 2 parameters: url and data(product)
  }
  //update product
  updateProduct(product:Product,id:number):Observable<Product>{
    return this.http.put<Product>(this.apiUrl+'/update'+id,product);
  }
  //delete product
  deleteProduct(id:number):Observable<any>{ //any is used when we don't know the return type
    return this.http.delete(this.apiUrl+'/delete'+id);
  }
  //get expired products
  getExpiredProducts():Observable<Product[]>{ 
    return this.http.get<Product[]>(this.apiUrl+'/expired');
  }

}
