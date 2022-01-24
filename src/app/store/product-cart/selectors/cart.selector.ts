import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  cartFeatureKey,
  productCartAdapter,
  ProductCartState,
} from '../reducers/product-cart.reducer';

export const cartFeatureSelector =
  createFeatureSelector<ProductCartState>(cartFeatureKey);

export const getProductCarts = createSelector(
  cartFeatureSelector,
  productCartAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  cartFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  cartFeatureSelector,
  (state) => state.error
);
