import { Component, EventEmitter, Input, Output } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface CartItem {
  name: string;
  img: string;
  quantity: number;
  Sugar: string;
  ML: string;
  price: number;
  priceBase: number;
}

interface ProductData {
  name: string;
  img: string;
}
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('modalState', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(100%)',
        display: 'none'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)',
        display: 'block'
      })),
      transition('hidden => visible', animate('220ms linear')),
      transition('visible => hidden', animate('220ms linear')),
    ])
  ]
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
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.saveCartItemsToLocalStorage();
    }
  }
  increaseQuantity() {
    this.quantity++;
    this.saveCartItemsToLocalStorage();
  }

  saveCartItemsToLocalStorage() {

    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
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
    const existingItemIndex = cartItems.findIndex(item => item.name === productName && item.ML === radioValue && item.Sugar === active);

    const productIdNewTest = { name: this.data?.name, img: this.data?.img };

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity and price
      this.cartItems[existingItemIndex].quantity = this.quantity;
      this.cartItems[existingItemIndex].price =
        this.cartItems[existingItemIndex].priceBase * this.quantity;
    } else {
      cartItems.push({ name: this.data?.name, price: productPrice, priceBase: productPrice, img: this.data?.img, quantity: this.quantity, Sugar: active, ML: radioValue });
    }

    this.cartItems = cartItems;

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

  modalState: 'hidden' | 'visible' = 'hidden';

  toggleModal() {
    this.modalState = this.modalState === 'hidden' ? 'visible' : 'hidden';
  }
}
