import { CartModel } from '@core/models/cart.model';
import { ProductCartModel } from '@core/models/product-cart.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const loadGetCurrentProductCartName =
  '[ProductCartCurrent] Load Get Current ProductCart';

export const loadGetCurrentProductCart = createAction(
  loadGetCurrentProductCartName
);

export const loadGetCurrentProductCartSuccess = createAction(
  loadGetCurrentProductCartName + ' Success',
  props<{
    currentProductCarts: ProductCartModel[];
  }>()
);

export const loadGetCurrentProductCartFailure = createAction(
  loadGetCurrentProductCartName + ' Failure',
  props<{
    error: string;
  }>()
);
