import { UserModel } from '@core/models/user.model';
import { createAction, props } from '@ngrx/store';

export const loadSignInGoogle = createAction(
  '[SignInGoogle] Load SignInGoogle'
);

export const loadSignInGoogleSuccess = createAction(
  '[SignInGoogle] Load SignInGoogle Success',
  props<{
    data: {
      user: UserModel;
    };
  }>()
);

export const loadSignInGoogleFailure = createAction(
  '[SignInGoogle] Load SignInGoogle Failure',
  props<{ error: string }>()
);
