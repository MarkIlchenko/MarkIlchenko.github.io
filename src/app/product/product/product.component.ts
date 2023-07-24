// Import statements should come first
import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data: any;
  @Output() addToCartClicked = new EventEmitter<number>();

  sendMessage(index: any) {
    alert(`Вы выбрали кофе с index: ${index}`);
  }

  public cartClickCount: number = 0;

  public addNewItem(index: any) {

    console.log(`Hi! ${index}`);
    this.addToCartClicked.emit(index);
  }


  radioValue: string = '250';
  checkBoxValue: boolean = false;

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

