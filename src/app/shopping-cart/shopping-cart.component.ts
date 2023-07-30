import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CartItem} from "../product/product/product.component";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css', './shopping-cart.component.media.css']
})
export class ShoppingCartComponent implements OnInit {
  sectionTitle: string = 'Shopping Cart';
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  @Output() cartItemsUpdated = new EventEmitter<CartItem[]>();

  ngOnInit() {
    const cartItemsData = localStorage.getItem('cartItems');
    this.cartItems = cartItemsData ? JSON.parse(cartItemsData) : [];
    this.calculateTotalPrice();
  }

  removeCartItem(cartItem: CartItem) {
    const index = this.cartItems.indexOf(cartItem);
    if (index !== -1) {
      this.cartItems.splice(index, 1);

      this.calculateTotalPrice();

      this.saveCartItemsToLocalStorage();
    }
  }


  decreaseQuantity(cartItem: CartItem) {

    if (cartItem.quantity > 1) {
      cartItem.quantity--;

      this.updateCartItemPrice(cartItem);

      this.saveCartItemsToLocalStorage();
      this.calculateTotalPrice();
    }
  }

  increaseQuantity(cartItem: CartItem) {
    cartItem.quantity++;
    this.updateCartItemPrice(cartItem);
    this.saveCartItemsToLocalStorage();
    this.calculateTotalPrice();
  }


  updateCartItemPrice(cartItem: CartItem) {
    cartItem.price = cartItem.priceBase * cartItem.quantity;
  }

  calculateBasePrice(cartItem: CartItem): number {
    return cartItem.price;
  }

  saveCartItemsToLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price + 5, 0);

    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));

    this.saveCartItemsToLocalStorage();
  }
  addNewItem(index: any) {
    this.cartItemsUpdated.emit(this.cartItems);
  }

  isMinusHovered = false;
  isPlusHovered = false;
  onMinusHover(hovered: boolean) {
    this.isMinusHovered = hovered;
  }

  onPlusHover(hovered: boolean) {
    this.isPlusHovered = hovered;
  }
}
