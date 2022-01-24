import { CartModel } from '@core/models/cart.model';
import { createReducer, on } from '@ngrx/store';
import {
  loadGetCurrentCart,
  loadGetCurrentCartSuccess,
  loadGetCurrentCartFailure,
} from '../actions/get-current-cart.actions';

export const currentCartFeatureKey = 'currentCart';

export interface CurrentCartState {
  currentCart: CartModel;
  loading: boolean;
  error: string | null;
}

const defaultState: CurrentCartState = {
  currentCart: null,
  loading: false,
  error: null,
};

export const currentCartReducer = createReducer(
  defaultState,
  // Cart with status pending
  on(loadGetCurrentCart, (state) => ({ ...state, loading: true })),
  on(loadGetCurrentCartSuccess, (state, action) => ({
    ...state,
    loading: false,
    currentCart: action.currentCart,
  })),
  on(loadGetCurrentCartFailure, (state) => ({ ...state, loading: false }))
);
