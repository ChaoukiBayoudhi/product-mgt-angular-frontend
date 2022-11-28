import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='http://localhost:8080/products';
  
  constructor(private http:HttpClient) { }//declare an instance of http client
  getProducts():Observable<any>{
    return this.http.get(this.apiUrl+'/all');
    
  }
}
