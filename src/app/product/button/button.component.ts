// button.component.ts
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "../product/product.component";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() public messageEvent = new EventEmitter<string>();

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
    // Ensure the quantity cannot be less than 1
    if (this.quantity > 1) {
      this.quantity--;
      this.saveCartItemsToLocalStorage();
    }
  }
  increaseQuantity() {
    this.quantity++;
    this.saveCartItemsToLocalStorage();
    // this.addToCartClicked.emit(this.quantity);
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
      // If the item doesn't exist, add it to the cart
      // cartItems.push({ name: productName, img: productImg, quantity: this.quantity, Sugar: active, ML: radioValue, price: productPrice, priceBase: productPrice });
      cartItems.push({ name: this.data?.name, price: productPrice, priceBase: productPrice, img: this.data?.img, quantity: this.quantity, Sugar: active, ML: radioValue });
    }

    this.cartItems = cartItems; // Update the class property with the modified cartItems array



    // Store the updated cartItems array in local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  private reloadPage() {
    window.location.reload(); // Reload the page
  }
}
