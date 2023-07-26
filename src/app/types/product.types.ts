// product.types.ts
export interface Product {
  index: number;
  id: string;
  name: string;
  img: string;
  price250: number;
  spinnerImg: string;
  discount: number;
  radioName: string;
  radioId1: string;
  radioId2: string;
  checkBoxName: string
  details: {
    calories: number;
    totalFat: number;
    cholesterol: number;
    sodium: number;
    totalCarbohydrate: number;
    protein: number;
    vitaminD: number;
    cancium: number;
  }
  cartItem2: boolean;
}

export class Product2 {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public img: string,
    public mlOptions: MLOption[],
    public sugarAdded: boolean = false,
    public discount: string,
    public quantity: number
  ) {}
}
export class MLOption {
  constructor(public id: string, public ml: number, public checked: boolean) {
  }
}

