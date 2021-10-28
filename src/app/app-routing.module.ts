import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { AddproductComponent } from './addproduct/addproduct.component';

const routes: Routes = [
  { path: '', redirectTo: 'allproducts', pathMatch: 'full' },
  { path: 'allproducts', component: ProductslistComponent },
  { path: 'addproducts', component: AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
