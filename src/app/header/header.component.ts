import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartClickCount: number = 0;
  public locastoraQuantity: number = 0;

  ngOnInit() {
    // Update cartClickCount and locastoraQuantity when component initializes
    this.updateQuantities();

    // Add event listener to listen for changes in localStorage
    window.addEventListener('storage', (event) => {
      if (event.key === 'quantity') {
        this.cartClickCount = parseInt(event.newValue || '0', 10); // Use '0' as default if event.newValue is null
        this.locastoraQuantity = this.cartClickCount; // Update locastoraQuantity as well
      }
    });
  }

  onAddToCartClicked(index: number) {
    this.cartClickCount++;
    localStorage.setItem('quantity', this.cartClickCount.toString());
    this.updateQuantities();

  }

  private updateQuantities() {
    const existingQuantity = localStorage.getItem('quantity');
    if (existingQuantity) {
      this.cartClickCount = parseInt(existingQuantity, 10);
      this.locastoraQuantity = this.cartClickCount; // Update locastoraQuantity as well
    }

  }


}
