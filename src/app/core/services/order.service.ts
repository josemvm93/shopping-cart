import { Injectable } from '@angular/core';
import { OrderModel, OrderProduct } from '@core/models/order.model';
import { CartService } from './cart.service';
import { ProductCartService } from '@core/services/product-cart.service';
import { ProductCartModel } from '@core/models/product-cart.model';
import { map, switchMap } from 'rxjs/operators';
import { CartModel } from '../models/cart.model';
import { Observable } from 'rxjs';
import { ProductState } from '@app/store/products/reducers/products.reducers';
import { Store } from '@ngrx/store';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private cartService: CartService,
    private productCartService: ProductCartService,
    private productService: ProductsService,
    private productStore: Store<ProductState>
  ) {}

  // getProductsByCart() {
  //   this.
  // }

  // getOrder(cart: CartModel): Observable<OrderModel> {
  //   const order: OrderModel = {
  //     cart,
  //     orderProduct: [],
  //   };
  //   this.productCartService.getProductCart(cart.id).pipe(
  //     switchMap((productCartList) =>
  //       [producthis.productService.getProductByIds(productCartList.map((productCart) => productCart.id)]
  //     )),
  //     map((products) => {
  //       return products.map((product) => {
  //         const orderProduct: OrderProduct = {
  //           quantity: productCart.quantity,
  //           product
  //         };
  //         order.orderProduct = orderProduct;
  //         return order;
  //       });
  //     })
  //   );
  // }
}
