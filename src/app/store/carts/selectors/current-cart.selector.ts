import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  currentCartFeatureKey,
  CurrentCartState,
} from '../reducers/current-cart.reducer';

export const currentCartFeatureSelector =
  createFeatureSelector<CurrentCartState>(currentCartFeatureKey);

export const getCurrentCart = createSelector(
  currentCartFeatureSelector,
  (state) => state.currentCart
);

export const getCurrentCartLoading = createSelector(
  currentCartFeatureSelector,
  (state) => state.loading
);

export const getCurrentCartError = createSelector(
  currentCartFeatureSelector,
  (state) => state.error
);
