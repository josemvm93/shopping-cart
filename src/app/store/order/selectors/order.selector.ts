import { createFeatureSelector, createSelector } from '@ngrx/store';
import { orderFeatureKey, OrderState } from '../reducers/order.reducer';

export const orderFeatureSelector =
  createFeatureSelector<OrderState>(orderFeatureKey);

export const getOrder = createSelector(
  orderFeatureSelector,
  (state) => state.order
);

export const getLoading = createSelector(
  orderFeatureSelector,
  (state) => state.loading
);

export const getError = createSelector(
  orderFeatureSelector,
  (state) => state.error
);
