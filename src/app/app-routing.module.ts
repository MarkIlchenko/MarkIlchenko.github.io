import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from "./product/product-page/product-page.component";
import {ShoppingCartComponent} from "./shopping-cart/shopping-cart.component";
import {ProductResolver} from "./resolvers/product.resolver";
import {ProductModalComponent} from "./product/product-modal/product-modal.component";

const routes: Routes = [
  {
    path: '',
    resolve: {products: ProductResolver},
    children: [
      { path: '', loadChildren: () => import('./product/products-page.module').then(m => m.ProductsPageModule), data: {animation: 'ProductPageComponent'} },
    ]
  },


  // {
  //   path: '',
  //   loadChildren: () => import('./product/products-page.module').then(m => m.ProductsPageModule),
  //   resolve: { products: ProductResolver } // Add the resolver here
  // },
  // { path: '', loadChildren: () => import('./product/products-page.module').then(m => m.ProductsPageModule) },

  { path: 'products', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class AppRoutingModule { }

