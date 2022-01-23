import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '@core/models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item: ProductModel;
  demoValue = 3;

  constructor() { }

  ngOnInit(): void {
  }

  addQuantity(): void {

  }

}
