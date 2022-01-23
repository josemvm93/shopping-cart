import { createAction, props } from '@ngrx/store';

export const loadSignout = createAction('[Signout] Load Signouts');

export const loadSignoutSuccess = createAction(
  '[Signout] Load Signout Success'
);

export const loadSignoutFailure = createAction(
  '[Signout] Load Signout Failure',
  props<{ error: string }>()
);
