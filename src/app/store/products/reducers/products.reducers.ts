import { ProductModel } from '../../../core/models/product.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { loadGetProducts, loadGetProductsFailure, loadGetProductsSuccess } from '../actions/get-products.actions';


export const productsFeatureKey = 'products';

export interface ProductState extends EntityState<ProductModel> {
  loading: boolean;
  error: string | null;
}

export const productAdapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

const defaultState: ProductState = {
  ids: [],
  entities: {},
  loading: false,
  error: null
};

export const initialState: ProductState = productAdapter.getInitialState(
  defaultState
);

export const productReducer = createReducer(
  initialState,
  on(loadGetProducts, (state) => ({...state, loading: true})),
  on(loadGetProductsSuccess, (state, action) =>
    productAdapter.setAll(action.products, { ...state, loading: false})
  ),
  on(loadGetProductsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))
)
