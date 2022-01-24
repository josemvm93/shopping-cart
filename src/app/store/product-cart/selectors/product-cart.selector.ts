import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  productCartAdapter,
  productCartFeatureKey,
  ProductCartState,
} from '../reducers/product-cart.reducer';

export const productCartFeatureSelector =
  createFeatureSelector<ProductCartState>(productCartFeatureKey);

export const getProductCarts = createSelector(
  productCartFeatureSelector,
  productCartAdapter.getSelectors().selectAll
);

export const getProductCartsLoading = createSelector(
  productCartFeatureSelector,
  (state) => state.loading
);

export const getProductCartsError = createSelector(
  productCartFeatureSelector,
  (state) => state.error
);
