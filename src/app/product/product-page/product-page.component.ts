import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product.types';

type Data = {
  [ket: string]: string;
};

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
  providers: [],
})
export class ProductPageComponent {
  @Output() public messageEvent = new EventEmitter<any>();
  @Input() public index: any;

  public addNewItem(index: any) {
    this.messageEvent.emit('Hey!');
    console.log(`Hi! ${index}`);
  }
  public sectionNameFirstPart: any = `We believe a cup of coffee is one of the most important, simple`;
  public sectionNameSecondPart: any = `in life`;
  public specialWord: any = 'pleasures ';

  @Input() data: any;
  sendMessage(index: any) {
    alert(`Вы выбрали кофе с index: ${index}`);
  }

  public productList: any[] = [
  ];

  public product: Product[] | undefined;

  constructor(private service: ProductsService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe((value) => {
      this.service.products = value['products'].products;
      this.product = this.service.products;
    });
  }

  onSubmit() {
    console.log(this.service.products);
  }


}
