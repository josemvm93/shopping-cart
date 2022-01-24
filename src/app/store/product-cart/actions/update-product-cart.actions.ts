import { ProductCartModel } from '@core/models/product-cart.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const loadUpdateProductCartName = '[ProductCart] Load Update ProductCart';

export const loadUpdateProductCart = createAction(
  loadUpdateProductCartName,
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadUpdateProductCartSuccess = createAction(
  loadUpdateProductCartName + ' Success',
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadUpdateProductCartFailure = createAction(
  loadUpdateProductCartName + ' Failure',
  props<{
    error: string;
  }>()
);
