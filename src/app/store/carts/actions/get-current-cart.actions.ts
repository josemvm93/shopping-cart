import { CartModel } from '@core/models/cart.model';
import { createAction, props } from '@ngrx/store';

const loadGetCurrentCartName = '[GetCurrentCart] Load Current Cart';
export const loadGetCurrentCart = createAction(loadGetCurrentCartName);

export const loadGetCurrentCartSuccess = createAction(
  loadGetCurrentCartName + ' Success',
  props<{
    currentCart: CartModel;
  }>()
);

export const loadGetCurrentCartFailure = createAction(
  loadGetCurrentCartName + ' Failure',
  props<{
    error: string;
  }>()
);
