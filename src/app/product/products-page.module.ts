// Import statements should come first
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductPageComponent } from './product-page/product-page.component';
import {ButtonComponent} from "./button/button.component";
import {ProductComponent} from "./product/product.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ProductPageComponent,
    ButtonComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsPageRoutingModule
  ]
})
export class ProductsPageModule { }



