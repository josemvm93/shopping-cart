import { ProductCartModel } from '@core/models/product-cart.model';
import { createReducer, on } from '@ngrx/store';
import {
  loadGetCurrentProductCart,
  loadGetCurrentProductCartSuccess,
  loadGetCurrentProductCartFailure,
} from '../actions/get-current-product-cart.actions';

export const currentProductCartFeatureKey = 'currentProductCart';

export interface CurrentProductCartState {
  currentProductCarts: ProductCartModel[];
  loading: boolean;
  error: string | null;
}

const defaultState: CurrentProductCartState = {
  currentProductCarts: [],
  loading: false,
  error: null,
};

export const currentProductCartReducer = createReducer(
  defaultState,
  on(loadGetCurrentProductCart, (state) => ({ ...state, loading: true })),
  on(loadGetCurrentProductCartSuccess, (state, action) => ({
    ...state,
    loading: false,
    currentProductCarts: action.currentProductCarts,
  })),
  on(loadGetCurrentProductCartFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
