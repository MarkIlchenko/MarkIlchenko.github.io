import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {ButtonComponent} from "./product/button/button.component";
import {ProductComponent} from "./product/product/product.component";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "./services/products.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
