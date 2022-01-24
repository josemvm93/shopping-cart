import { Component, OnInit } from '@angular/core';
import { CartState } from '@app/store/carts/reducers/cart.reducer';
import { CurrentCartState } from '@app/store/carts/reducers/current-cart.reducer';
import { getCurrentCart } from '@app/store/carts/selectors/current-cart.selector';
import { loadGetProducts } from '@app/store/products/actions/get-products.actions';
import { ProductState } from '@app/store/products/reducers/products.reducers';
import { getProducts } from '@app/store/products/selectors/products.selectors';
import { ProductModel } from '@core/models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadGetCurrentCart } from '@app/store/carts/actions/get-current-cart.actions';
import { CartModel } from '@core/models/cart.model';
import { loadGetCurrentProductCart } from '@app/store/product-cart/actions/get-current-product-cart.actions';
import { ProductCartModel } from '../../../../core/models/product-cart.model';
import { CurrentProductCartState } from '@app/store/product-cart/reducers/current-product-cart.reducer';
import { getCurrentProductCarts } from '@app/store/product-cart/selectors/current-product-cart.selector';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products$: Observable<ProductModel[]>;
  currentCart$: Observable<CartModel>;
  currentProductCarts$: Observable<ProductCartModel[]>;

  constructor(
    private currentCartStore: Store<CurrentCartState>,
    private produtcsStore: Store<ProductState>,
    private currentProductCartState: Store<CurrentProductCartState>
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCurrentCart();
    this.getCurrentProductCarts();
  }

  getProducts(): void {
    this.produtcsStore.dispatch(loadGetProducts());
    this.products$ = this.produtcsStore.select(getProducts);
  }

  getCurrentCart(): void {
    this.currentCartStore.dispatch(loadGetCurrentCart());
    this.currentCart$ = this.currentCartStore.select(getCurrentCart);
  }

  getCurrentProductCarts(): void {
    this.currentProductCartState.dispatch(loadGetCurrentProductCart());
    this.currentProductCarts$ = this.currentProductCartState.select(
      getCurrentProductCarts
    );
  }
}
