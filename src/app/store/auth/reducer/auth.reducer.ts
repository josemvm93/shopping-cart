import { UserModel } from '@core/models/user.model';
import { Action, createReducer, on } from '@ngrx/store';
import {
  loadSignInGoogle,
  loadSignInGoogleSuccess,
  loadSignInGoogleFailure,
} from '../actions/sign-in-google.actions';
import {
  loadSignout,
  loadSignoutSuccess,
  loadSignoutFailure,
} from '../actions/sign-out.actions';
import {
  loadCheckAuth,
  loadCheckAuthFailure,
  loadCheckAuthSuccess,
} from '../actions/check-auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: UserModel | null;
  loading: boolean;
  error: string | null;
}

export const initialState: State = {
  user: null,
  loading: false,
  error: null,
};

export const reducer = createReducer<State, Action>(
  initialState,
  on(loadCheckAuth, (state) => ({ ...state, loading: true })),
  on(loadCheckAuthSuccess, (state, action) => ({
    ...state,
    loading: false,
    user: action.data.user,
  })),
  on(loadCheckAuthFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(loadSignInGoogle, (state) => ({ ...state, loading: true })),
  on(loadSignInGoogleSuccess, (state, action) => ({
    ...state,
    loading: false,
    user: action.data.user,
  })),
  on(loadSignInGoogleFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(loadSignout, (state) => ({ ...state, loading: true })),
  on(loadSignoutSuccess, (state) => ({ ...state, loading: false })),
  on(loadSignoutFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
