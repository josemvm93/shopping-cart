import { CartModel } from '@core/models/cart.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  loadAddCart,
  loadAddCartFailure,
  loadAddCartSuccess,
} from '../actions/add-cart.actions';
import {
  loadUpdateCart,
  loadUpdateCartFailure,
  loadUpdateCartSuccess,
} from '../actions/update-cart.actions';

export const cartFeatureKey = 'cart';

export interface CartState extends EntityState<CartModel> {
  loading: boolean;
  error: string | null;
}

export const cartAdapter: EntityAdapter<CartModel> =
  createEntityAdapter<CartModel>();

const defaultState: CartState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const initialState: CartState =
  cartAdapter.getInitialState(defaultState);

export const cartReducer = createReducer(
  initialState,
  // Add Cart
  on(loadAddCart, (state) => ({ ...state, loading: true })),
  on(loadAddCartSuccess, (state) => ({ ...state, loading: false })),
  on(loadAddCartFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  // Update Cart
  on(loadUpdateCart, (state) => ({ ...state, loading: true })),
  on(loadUpdateCartSuccess, (state) => ({ ...state, loading: false })),
  on(loadUpdateCartFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
