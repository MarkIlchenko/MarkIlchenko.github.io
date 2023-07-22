import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data: any;

  sendMessage(index: any) {
    alert(`Вы выбрали кофе с index: ${index}`);
  }
}