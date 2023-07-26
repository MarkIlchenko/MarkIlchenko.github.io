import {Component, EventEmitter, OnInit, Output} from '@angular/core';

// Import the CartItem interface from the product-page.component.ts file
import {CartItem} from "../product/product/product.component";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  sectionTitle: string = 'Shopping Cart';
  cartItems: CartItem[] = []; // Use the CartItem interface here
  totalPrice: number = 0;
  @Output() cartItemsUpdated = new EventEmitter<CartItem[]>();

  ngOnInit() {
    // Retrieve the cartItems data from localStorage and parse it
    const cartItemsData = localStorage.getItem('cartItems');
    this.cartItems = cartItemsData ? JSON.parse(cartItemsData) : [];
    this.calculateTotalPrice();
  }


  removeCartItem(cartItem: CartItem) {
    const index = this.cartItems.indexOf(cartItem);
    if (index !== -1) {
      // Remove the cart item from the array
      this.cartItems.splice(index, 1);

      // Update the total price after removing the item
      this.calculateTotalPrice();

      // Save the updated cart items to localStorage
      this.saveCartItemsToLocalStorage();
    }
  }


  decreaseQuantity(cartItem: CartItem) {

    if (cartItem.quantity > 1) {
      // Decrease the quantity by 1
      cartItem.quantity--;

      // Update the cart item price based on the new quantity
      this.updateCartItemPrice(cartItem);

      // Save the cart items to localStorage
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
    // You can adjust the price calculation based on your needs
    // For example, you can multiply the base price by the quantity
    cartItem.price = cartItem.priceBase * cartItem.quantity;

  }

  calculateBasePrice(cartItem: CartItem): number {
    // Here, you can retrieve the base price from the cartItem or the product data
    // For demonstration purposes, let's assume the base price is stored directly in cartItem

    return cartItem.price;

  }

  saveCartItemsToLocalStorage() {

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  calculateTotalPrice() {
    // Loop through the cart items and add up their prices
    this.totalPrice = this.cartItems.reduce((total, item) => total + item.price + 5, 0);

    // Round the totalPrice to two decimal places
    this.totalPrice = parseFloat(this.totalPrice.toFixed(2));

    // Save the rounded totalPrice and cart items to localStorage
    this.saveCartItemsToLocalStorage();
  }
  addNewItem(index: any) {
    // ... (your existing code)

    // Emit the updated cartItems array
    this.cartItemsUpdated.emit(this.cartItems);
  }
}
