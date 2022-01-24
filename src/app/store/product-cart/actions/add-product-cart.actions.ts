import { ProductCartModel } from '@core/models/product-cart.model';
import { ProductModel } from '@core/models/product.model';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

const loadAddProductCartName = '[ProductCart] Load Add ProductCart';

export const loadAddProductCart = createAction(
  loadAddProductCartName,
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadAddProductCartSelected = createAction(
  loadAddProductCartName,
  props<{
    selectedProducts: ProductModel[];
  }>()
);

export const loadAddProductCartSuccess = createAction(
  loadAddProductCartName + ' Success',
  props<{
    productCart: ProductCartModel;
  }>()
);

export const loadAddProductCartFailure = createAction(
  loadAddProductCartName + ' Failure',
  props<{
    error: string;
  }>()
);
