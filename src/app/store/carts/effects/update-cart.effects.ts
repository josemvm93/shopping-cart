import { Injectable } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import {
  loadUpdateCart,
  loadUpdateCartFailure,
  loadUpdateCartSuccess,
} from '../actions/update-cart.actions';

@Injectable()
export class UpdateCartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  public updateCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUpdateCart),
      mergeMap(async ({ cart }) => {
        return this.cartService
          .updateCart(cart)
          .then(() => loadUpdateCartSuccess())
          .catch((e) => loadUpdateCartFailure({ error: `${e}` }));
      })
    );
  });
}
