import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'list-product',//the selector is used to call the component in html (via <list-product></list-product>)
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  products: Array<Product>=[];//declare an array of products as attribute of the component
  product: Product = new Product();
  constructor(private productServ:ProductService ) { }//productServ is an instance of ProductService (the service getting data from the backend)
   ngOnInit() { //this method is called when the component is initialized (loaded)
    //get all products from the backend and assign them to the products
    //array to be displayed in the html
     this.productServ.getProducts().subscribe(p => {
       this.products = p;//assign the products returned from the backend to the products array
     });
  }

}
