import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/components/add-product/add-product.component';
import { ListProductComponent } from './product/components/list-product/list-product.component';
import { UpdateProductComponent } from './product/components/update-product/update-product.component';
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ListProductComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'update-product/:id', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
