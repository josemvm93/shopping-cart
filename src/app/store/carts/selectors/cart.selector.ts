import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  cartAdapter,
  cartFeatureKey,
  CartState,
} from '../reducers/cart.reducer';

export const cartFeatureSelector =
  createFeatureSelector<CartState>(cartFeatureKey);

export const getCarts = createSelector(
  cartFeatureSelector,
  cartAdapter.getSelectors().selectAll
);

export const getLoading = createSelector(
  cartFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  cartFeatureSelector,
  (state) => state.error
);
