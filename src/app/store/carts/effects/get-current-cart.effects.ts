import { Injectable } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadGetCurrentCart,
  loadGetCurrentCartFailure,
  loadGetCurrentCartSuccess,
} from '../actions/get-current-cart.actions';
import { of } from 'rxjs';

@Injectable()
export class GetCurrentCartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  public getCurrentCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetCurrentCart),
      mergeMap(() => {
        return this.cartService.getCurrentCart().pipe(
          map((currentCart) => loadGetCurrentCartSuccess({ currentCart })),
          catchError((e) => of(loadGetCurrentCartFailure({ error: `${e}` })))
        );
      })
    );
  });
}
