import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  currentProductCartFeatureKey,
  CurrentProductCartState,
} from '../reducers/current-product-cart.reducer';

export const currentProductCartFeatureSelector =
  createFeatureSelector<CurrentProductCartState>(currentProductCartFeatureKey);

export const getCurrentProductCarts = createSelector(
  currentProductCartFeatureSelector,
  (state) => state.currentProductCarts
);

export const getCurrentProductCartsLoading = createSelector(
  currentProductCartFeatureSelector,
  (state) => state.loading
);

export const getCurrentProductCartsError = createSelector(
  currentProductCartFeatureSelector,
  (state) => state.error
);
