import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '@core/models/user.model';
import { AuthService } from '@core/services/auth.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { loadSignInGoogle, loadSignInGoogleSuccess, loadSignInGoogleFailure } from '../actions/sign-in-google.actions';


@Injectable()
export class SignInGoogleEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  public signInGoogle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSignInGoogle),
      mergeMap(async () => {
        return this.authService
          .signInWithGoogle()
          .then((user) => {
            if (user !== null) {
              const authUser: UserModel = {
                id: user.uid,
                email: user.email,
                name: user.displayName,
                photoUrl: user.photoURL,
              };
              return loadSignInGoogleSuccess({ data: { user: authUser } });
            } else {
              return loadSignInGoogleFailure({
                error: 'CANCELLED BY USER',
              });
            }
          })
          .catch((e) => {
            return loadSignInGoogleFailure({ error: `${e}` });
          });
      })
    );
  });

  private signInGoogleSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadSignInGoogleSuccess),
        tap(() => this.router.navigate(['/main']))
      );
    },
    {
      dispatch: false,
    }
  );
}
