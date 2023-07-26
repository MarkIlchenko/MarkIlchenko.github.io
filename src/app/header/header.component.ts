import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CartItem } from "../product/product/product.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() cartItems: CartItem[] = []; // Use the CartItem interface here

  ngOnInit() {
    // Retrieve the cartItems data from localStorage and parse it
    const cartItemsData = localStorage.getItem('cartItems');
    this.cartItems = cartItemsData ? JSON.parse(cartItemsData) : [];

  }
  getLocalStorageItemCount(): number {
    const articles = JSON.parse(localStorage.getItem('cartItems') || '[]');
    let itemCount = 0;
    articles.forEach((item: any) => {
      itemCount += item.quantity;
    });
    return itemCount;
  }


}
