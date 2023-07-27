import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent {
  // Add a property to control the visibility state of the modal
  @Input() data: any;
  // @ts-ignore
  @Input() buttonText: string;

  @Output() buttonAction: EventEmitter<any> = new EventEmitter<any>();

  // Emit an event when the "Close" button is clicked
  onCloseButtonClick() {
    this.buttonAction.emit();
  }

}

