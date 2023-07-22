import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  public sectionNameFirstPart: any = `We believe a cup of coffee is one of the most important, simple`
  public sectionNameSecondPart: any = `in life`
  public specialWord: any = 'pleasures '


  public productList: any =
    [
      {
        name: 'Extra Latte',
        img: 'assets/Cup.png',
        spinnerImg: 'assets/Stamp.svg',
        discount: 8.99,

        radioName: 'Late-ML',
        radioId1: 'Late-option1',
        radioId2: 'Late-option2',

        checkBoxName: 'Late-ML-myCheckbox',
        index: 1
      },
      {
        name: 'Cappuccino',
        img: 'assets/Cup2.svg',
        discount: 9.99,

        radioName: 'Cappuccino-ML',
        radioId1: 'Cappuccino-option1',
        radioId2: 'Cappuccino-option2',

        checkBoxName: 'Cappuccino-ML-myCheckbox',
        index: 2
      },
      {
        name: 'Moccachino',
        img: 'assets/Cup3.svg',
        discount: 7.29,

        radioName: 'EX-Late-ML',
        radioId1: 'EX-Late-option1',
        radioId2: 'EX-Late-option2',

        checkBoxName: 'EX-Late-ML-myCheckbox',
        index: 3
      }
    ];
}
