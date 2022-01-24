import { OrderModel } from '@core/models/order.model';
import { createReducer, on } from '@ngrx/store';
import {
  loadGetOrderSuccess,
  loadGetOrder,
  loadGetOrderFailure,
} from '../actions/get-order.actions';
import {
  loadAddOrder,
  loadAddOrderFailure,
  loadAddOrderSuccess,
} from '../actions/add-order.actions';
import {
  loadUpdateOrder,
  loadUpdateOrderFailure,
  loadUpdateOrderSuccess,
} from '../actions/update-order.actions';
import {
  loadDeleteOrder,
  loadDeleteOrderSuccess,
  loadDeleteOrderFailure,
} from '../actions/delte-order.actions';

export const orderFeatureKey = 'order';

export interface OrderState {
  order: OrderModel;
  loading: boolean;
  error: string | null;
}

const defaultState: OrderState = {
  order: null,
  loading: false,
  error: null,
};

export const orderReducer = createReducer(
  defaultState,
  // Add Order
  on(loadAddOrder, (state) => ({ ...state, loading: true })),
  on(loadAddOrderSuccess, (state) => ({ ...state, loading: false })),
  on(loadAddOrderFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  // Update Order
  on(loadUpdateOrder, (state) => ({ ...state, loading: true })),
  on(loadUpdateOrderSuccess, (state) => ({ ...state, loading: false })),
  on(loadUpdateOrderFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  // Get Order
  on(loadGetOrder, (state) => ({ ...state, loading: true })),
  on(loadGetOrderSuccess, (state) => ({ ...state, loading: false })),
  on(loadGetOrderFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  // Delete Order
  on(loadDeleteOrder, (state) => ({ ...state, loading: true })),
  on(loadDeleteOrderSuccess, (state) => ({ ...state, loading: false })),
  on(loadDeleteOrderFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
