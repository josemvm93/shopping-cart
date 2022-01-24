import { Injectable } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadGetPendingCart,
  loadGetPendingCartFailure,
  loadGetPendingCartSuccess,
} from '../actions/get-pending-cart.actions';
import { of } from 'rxjs';

@Injectable()
export class GetPendingCartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  public getPendingCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetPendingCart),
      mergeMap(() => {
        return this.cartService.getCurrentCart().pipe(
          map((cart) => loadGetPendingCartSuccess({ cart })),
          catchError((e) => of(loadGetPendingCartFailure({ error: `${e}` })))
        );
      })
    );
  });
}
