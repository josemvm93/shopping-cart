import { UserModel } from '@core/models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadCheckAuth = createAction('[CheckAuth] Load CheckAuths');

export const loadCheckAuthSuccess = createAction(
  '[CheckAuth] Load CheckAuths Success',
  props<{
    data: {
      user: UserModel;
    };
  }>()
);

export const loadCheckAuthFailure = createAction(
  '[CheckAuth] Load CheckAuths Failure',
  props<{ error: string }>()
);
