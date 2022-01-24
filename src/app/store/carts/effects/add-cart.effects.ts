import { Injectable } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import {
  loadAddCart,
  loadAddCartFailure,
  loadAddCartSuccess,
} from '../actions/add-cart.actions';

@Injectable()
export class AddCartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  public addCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAddCart),
      mergeMap(async ({ cart }) => {
        return this.cartService
          .addCart(cart)
          .then(() => loadAddCartSuccess({ cart }))
          .catch((e) => loadAddCartFailure({ error: `${e}` }));
      })
    );
  });
}
