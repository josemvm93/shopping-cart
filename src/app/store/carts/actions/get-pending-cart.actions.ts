import { CartModel } from '@core/models/cart.model';
import { createAction, props } from '@ngrx/store';

const loadGetPendingCartName = '[GetPendingCart] Load Pending Cart';
export const loadGetPendingCart = createAction(loadGetPendingCartName);

export const loadGetPendingCartSuccess = createAction(
  loadGetPendingCartName + ' Success',
  props<{
    cart: CartModel;
  }>()
);

export const loadGetPendingCartFailure = createAction(
  loadGetPendingCartName + ' Failure',
  props<{
    error: string;
  }>()
);
