import { ProductCartModel } from '@core/models/product-cart.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  loadAddProductCart,
  loadAddProductCartFailure,
  loadAddProductCartSuccess,
} from '../actions/add-product-cart.actions';
import {
  loadGetProductCart,
  loadGetProductCartFailure,
  loadGetProductCartSuccess,
} from '../actions/get-product-cart.actions';
import {
  loadUpdateProductCart,
  loadUpdateProductCartFailure,
  loadUpdateProductCartSuccess,
} from '../actions/update-product-cart.actions';

export const cartFeatureKey = 'cart';

export interface ProductCartState extends EntityState<ProductCartModel> {
  loading: boolean;
  error: string | null;
  cart: ProductCartModel;
}

export const productCartAdapter: EntityAdapter<ProductCartModel> =
  createEntityAdapter<ProductCartModel>();

const defaultState: ProductCartState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
  cart: null,
};

export const initialState: ProductCartState =
  productCartAdapter.getInitialState(defaultState);

export const cartReducer = createReducer(
  initialState,
  // Add ProductCart
  on(loadAddProductCart, (state) => ({ ...state, loading: true })),
  on(loadAddProductCartSuccess, (state) => ({ ...state, loading: false })),
  on(loadAddProductCartFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  // Get ProductCart
  on(loadGetProductCart, (state) => ({ ...state, loading: true })),
  on(loadGetProductCartSuccess, (state) => ({ ...state, loading: false })),
  on(loadGetProductCartFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  // Update ProductCart
  on(loadUpdateProductCart, (state) => ({ ...state, loading: true })),
  on(loadUpdateProductCartSuccess, (state) => ({ ...state, loading: false })),
  on(loadUpdateProductCartFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))

  // // ProductCart with status pending
  // on(loadGetPendingProductCart, (state) => ({ ...state, loading: true })),
  // on(loadGetPendingProductCartSuccess, (state, action) =>
  //   cartAdapter.setOne(action.cart, { ...state, loading: false })
  // ),
  // on(loadGetPendingProductCartFailure, (state, action) => ({
  //   ...state,
  //   loading: false,
  //   error: action.error,
  // })),
);
