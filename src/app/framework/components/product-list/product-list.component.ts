import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '@core/models/product.model';
import { CartModel } from '@core/models/cart.model';
import { ProductCartModel } from '@core/models/product-cart.model';

export enum ProductListComponentMode {
  ONE,
  TWO,
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductModel[];
  @Input() currentCart: CartModel[];
  @Input() currentProductCarts: ProductCartModel[];
  @Input() mode = ProductListComponentMode.ONE;

  constructor() {}

  ngOnInit(): void {}
}
