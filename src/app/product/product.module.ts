import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductComponent } from './product/product.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductModule { }
