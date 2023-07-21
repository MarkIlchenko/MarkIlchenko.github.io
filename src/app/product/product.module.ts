import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductTemplateComponent } from './product-template/product-template.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductModule { }
