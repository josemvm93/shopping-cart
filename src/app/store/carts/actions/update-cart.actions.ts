import { CartModel } from '@core/models/cart.model';
import { createAction, props } from '@ngrx/store';

const loadUpdateCartName = '[UpdateCart] Load UpdateCart';

export const loadUpdateCart = createAction(
  loadUpdateCartName,
  props<{ cart: CartModel }>()
);

export const loadUpdateCartSuccess = createAction(
  loadUpdateCartName + ' Success'
);

export const loadUpdateCartFailure = createAction(
  loadUpdateCartName + ' Failure',
  props<{ error: string }>()
);
