import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  productAdapter,
  productsFeatureKey,
  ProductState,
} from '../reducers/products.reducers';

export const productsFeatureSelector =
  createFeatureSelector<ProductState>(productsFeatureKey);

export const getProducts = createSelector(
  productsFeatureSelector,
  productAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  productsFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  productsFeatureSelector,
  (state) => state.error
);
