import { Component, EventEmitter, Input, Output } from '@angular/core';


export interface CartItem {
  name: string;
  img: string;
  quantity: number; // Make sure quantity is included in the CartItem interface
  active: string;
  radio: string;
  price: number;
  price2: number;
}

interface ProductData {
  name: string;
  img: string;
  // Add more properties if needed
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data: any;
  @Input() cartItems: CartItem[] = [];
  @Output() addToCartClicked = new EventEmitter<number>();

  public cartClickCount: number = 0;
  public radioValue: string = '250';
  public checkBoxValue: boolean = false;

  sendMessage(index: any) {
    alert(`Вы выбрали кофе с index: ${index}`);
  }

  public quantity: number = 1;


  // cartItems: CartItem[] = [];
  ngOnInit() {
    // Retrieve the cartItems data from localStorage and parse it
    const cartItemsData = localStorage.getItem('cartItems');
    this.cartItems = cartItemsData ? JSON.parse(cartItemsData) : [];

  }
  saveCartItemsToLocalStorage() {

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  increaseQuantity() {
    this.quantity++;
    this.saveCartItemsToLocalStorage();
    // this.addToCartClicked.emit(this.quantity);
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
    this.saveCartItemsToLocalStorage();
    // this.addToCartClicked.emit(this.quantity);
  }




  public cartItem2: any;
  showQuantityContainer = false;
  hideButton = true;
  addNewItem(index: any) {

    const clickTest = this.showQuantityContainer = true;
    const clickTest2 = this.hideButton = false;

    const totalQuantity = this.cartItems.length;
    this.addToCartClicked.emit(totalQuantity);
    // window.location.reload();
    const productName = this.data?.name;
    const productSugar = this.data?.active;
    const productImg = this.data?.img;
    const quantity = 1;
    const active = this.checkBoxValue ? 'Sugar' : 'Without Sugar';
    const radioValue = this.radioValue === '250' ? '250' : '500';
    const selectedRadioValue = this.radioValue;
    const productPrice = selectedRadioValue === '250' ? this.data.price250 : this.data.discount;
    const productPrice2 = selectedRadioValue === '250' ? this.data.price250 : this.data.discount;
    const productPrice3 = productPrice + productPrice2;
    const cartItemsStr = localStorage.getItem('cartItems');
    let cartItems: CartItem[] = cartItemsStr ? JSON.parse(cartItemsStr) : [];
    this.cartItems = cartItems;
    const existingItemIndex = cartItems.findIndex(item => item.name === productName && item.radio === radioValue);

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity and price
      cartItems[existingItemIndex].quantity += quantity;
      cartItems[existingItemIndex].price += productPrice * quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      cartItems.push({ name: productName, img: productImg, quantity: this.quantity, active: active, radio: radioValue, price: productPrice, price2: productPrice });
    }

    this.cartItems = cartItems; // Update the class property with the modified cartItems array

    // Store the updated cartItems array in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  sendMessageRadioButton(index: any) {
    if (this.radioValue === '500') {
      console.log(`[${index}] Вы выбрали 500 мл`);
    } else {
      console.log(`[${index}] Вы выбрали 250 мл`);
    }
  }

  sendMessageSugar(index: any) {
    if (this.checkBoxValue) {
      console.log(`[${index}] Вы выбрали с сахаром`);
    } else {
      console.log(`[${index}] Вы выбрали без сахара`);
    }
  }



}
