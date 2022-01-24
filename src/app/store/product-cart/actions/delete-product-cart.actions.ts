import { ProductCartModel } from '@core/models/product-cart.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const loadDeleteProductCartName = '[ProductCart] Load Delete ProductCart';

export const loadDeleteProductCart = createAction(
  loadDeleteProductCartName,
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadDeleteProductCartSuccess = createAction(
  loadDeleteProductCartName + ' Success',
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadDeleteProductCartFailure = createAction(
  loadDeleteProductCartName + ' Failure',
  props<{
    error: string;
  }>()
);
