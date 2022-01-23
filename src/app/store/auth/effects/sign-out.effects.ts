import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import {
  loadSignout,
  loadSignoutFailure,
  loadSignoutSuccess,
} from '../actions/sign-out.actions';

@Injectable()
export class SignoutEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public signout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSignout),
      mergeMap(async () => {
        return this.authService
          .signout()
          .then(() => {
            return loadSignoutSuccess();
          })
          .catch((e) => {
            return loadSignoutFailure({ error: `${e}` });
          });
      })
    );
  });

  private signoutSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadSignoutSuccess),
        tap(() => this.router.navigate(['/']))
      );
    },
    {
      dispatch: false,
    }
  );
}
