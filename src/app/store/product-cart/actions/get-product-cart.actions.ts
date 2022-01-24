import { ProductCartModel } from '@core/models/product-cart.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const loadGetProductCartName = '[ProductCart] Load Get ProductCart';

export const loadGetProductCart = createAction(
  loadGetProductCartName,
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadGetProductCartSuccess = createAction(
  loadGetProductCartName + ' Success',
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadGetProductCartFailure = createAction(
  loadGetProductCartName + ' Failure',
  props<{
    error: string;
  }>()
);
