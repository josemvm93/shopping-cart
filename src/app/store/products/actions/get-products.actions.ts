import { createAction, props } from '@ngrx/store';
import { ProductModel } from '../../../core/models/product.model';

const loadGetProductsName = '[GetProducts] Load Products';
export const loadGetProducts = createAction(loadGetProductsName);

export const loadGetProductsSuccess = createAction(
  loadGetProductsName + ' Success',
  props<{
    products: ProductModel[];
  }>()
);

export const loadGetProductsFailure = createAction(
  loadGetProductsName + 'Failure',
  props<{
    error: string;
  }>()
);
