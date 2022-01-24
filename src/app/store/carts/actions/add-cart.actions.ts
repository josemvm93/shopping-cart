import { CartModel } from '@core/models/cart.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const loadAddCartName = '[AddCart] Load Add Cart';

export const loadAddCart = createAction(
  loadAddCartName,
  props<{
    cart: CartModel;
  }>()
);

export const loadAddCartSuccess = createAction(
  loadAddCartName + ' Success',
  props<{
    cart: CartModel;
  }>()
);

export const loadAddCartFailure = createAction(
  loadAddCartName + ' Failure',
  props<{
    error: string;
  }>()
);
