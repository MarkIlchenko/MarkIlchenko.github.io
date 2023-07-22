import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output() public messageEvent = new EventEmitter<any>();
  @Input() public index: any;
  public addNewItem(index: any) {
    this.messageEvent.emit("Hey!");
    console.log(`Hi! ${index}`);
  }
}
