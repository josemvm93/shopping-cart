import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadCheckAuth,
  loadCheckAuthFailure,
  loadCheckAuthSuccess,
} from '../actions/check-auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserModel } from '@core/models/user.model';
import { of } from 'rxjs';

@Injectable()
export class CheckAuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public checkAuth$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCheckAuth),
      mergeMap(() => {
        return this.authService.checkAuth().pipe(
          map((user) => {
            if (user !== null) {
              const authUser: UserModel = {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                photoUrl: user.photoURL,
              };
              return loadCheckAuthSuccess({ data: { user: authUser } });
            } else {
              return loadCheckAuthFailure({ error: 'Cancelled By User' });
            }
          }),
          catchError((e) => of(loadCheckAuthFailure({ error: `${e}` })))
        );
      })
    );
  });

  private checkAuthSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadCheckAuthSuccess),
        tap(() => {
          this.router.navigate(['/main']);
        })
      );
    },
    { dispatch: false }
  );
}
