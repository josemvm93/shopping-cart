import { Component, OnInit } from '@angular/core';
import { CartModel } from '@core/models/cart.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$: Observable<CartModel>;

  constructor() {}

  ngOnInit(): void {}
}
