import { ProductCartModel } from '@core/models/product-cart.model';
import { ProductModel } from '@core/models/product.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import {
  loadAddProductCart,
  loadAddProductCartFailure,
  loadAddProductCartSuccess,
} from '../actions/add-product-cart.actions';
import {
  loadDeleteProductCart,
  loadDeleteProductCartSuccess,
  loadDeleteProductCartFailure,
} from '../actions/delete-product-cart.actions';
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

export const productCartFeatureKey = 'productCart';

export interface ProductCartState extends EntityState<ProductCartModel> {
  loading: boolean;
  error: string | null;
}

export const productCartAdapter: EntityAdapter<ProductCartModel> =
  createEntityAdapter<ProductCartModel>();

const defaultState: ProductCartState = {
  ids: [],
  entities: {},
  loading: false,
  error: null,
};

export const initialState: ProductCartState =
  productCartAdapter.getInitialState(defaultState);

export const productCartReducer = createReducer(
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
  })),
  // Delete ProductCart
  on(loadDeleteProductCart, (state) => ({ ...state, loading: true })),
  on(loadDeleteProductCartSuccess, (state) => ({ ...state, loading: false })),
  on(loadDeleteProductCartFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
