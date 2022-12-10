import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  product = new Product();
  constructor(private productService:ProductService,
    private router:Router) { }

    save(form:NgForm){
      console.log(form.value);
      //add product introduced over the form to the backend using the service
     this.productService.addProduct(form.value).subscribe(p => {
      //navigate to the products list after adding the product
      this.router.navigate(['/products']);
     });
    }
}
