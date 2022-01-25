import { Component, Input, OnInit } from '@angular/core';
import { loadAddProductCart } from '@app/store/product-cart/actions/add-product-cart.actions';
import { loadDeleteProductCart } from '@app/store/product-cart/actions/delete-product-cart.actions';
import { loadUpdateProductCart } from '@app/store/product-cart/actions/update-product-cart.actions';
import { ProductCartState } from '@app/store/product-cart/reducers/product-cart.reducer';
import { getProductCartsLoading } from '@app/store/product-cart/selectors/product-cart.selector';
import { ProductCartModel } from '@core/models/product-cart.model';
import { ProductModel } from '@core/models/product.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductListComponentMode } from '../product-list.component';
import firebase from 'firebase';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() currentCart: ProductModel;
  @Input() mode = ProductListComponentMode.ONE;
  @Input() set currentProductCarts(productCarts: ProductCartModel[]) {
    this.productCartFound = productCarts?.find(
      (productCart) => productCart.product_id === this.product.id
    );
    if (this.productCartFound) {
      this.quantity = this.productCartFound.quantity;
      this.textButton = 'Modify';
    }
  }

  quantity = 1;
  loading$: Observable<boolean>;
  productCartFound: ProductCartModel;
  textButton = 'Add';

  get description(): string {
    return this.product.description;
  }

  get isModeTwo(): boolean {
    return this.mode === ProductListComponentMode.TWO;
  }

  constructor(private productCartStore: Store<ProductCartState>) {}

  ngOnInit(): void {}

  addToCart(): void {
    if (this.productCartFound) {
      const productCart: ProductCartModel = {
        ...this.productCartFound,
        quantity: this.quantity,
      };
      this.productCartStore.dispatch(loadUpdateProductCart({ productCart }));
    } else {
      const productCart: ProductCartModel = {
        id: '',
        quantity: this.quantity,
        cart_id: this.currentCart.id,
        product_id: this.product.id,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      };
      this.productCartStore.dispatch(loadAddProductCart({ productCart }));
    }
    this.loading$ = this.productCartStore.select(getProductCartsLoading);
  }

  getProductCart(): ProductCartModel {
    return this.currentProductCarts?.find(
      (productCart) => productCart.product_id === this.product.id
    );
  }

  deleteProduct(): void {
    const productCart: ProductCartModel = {
      ...this.productCartFound,
    };
    this.productCartStore.dispatch(loadDeleteProductCart({ productCart }));
    this.loading$ = this.productCartStore.select(getProductCartsLoading);
  }
}
