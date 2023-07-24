// button.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() public messageEvent = new EventEmitter<string>();

  public addNewItem() {
    const existingQuantity = localStorage.getItem('quantity');
    let quantity = 0;
    if (existingQuantity) {
      quantity = parseInt(existingQuantity, 10);
    }
    quantity++;
    localStorage.setItem('quantity', quantity.toString());
    this.reloadPage();

    this.messageEvent.emit("Hey!");
  }

  private reloadPage() {
    window.location.reload(); // Reload the page
  }
}
