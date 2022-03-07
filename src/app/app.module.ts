import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { DeleteproductsComponent } from './deleteproducts/deleteproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosModule } from './todos/todos.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoWithJsonfileComponent } from './todo-with-jsonfile/todo-with-jsonfile.component';
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ProductslistComponent,
    DeleteproductsComponent,
    TodoWithJsonfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TodosModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
