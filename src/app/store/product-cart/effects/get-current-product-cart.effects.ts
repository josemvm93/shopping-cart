import { Injectable } from '@angular/core';
import { ProductCartService } from '@core/services/product-cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadGetCurrentProductCart,
  loadGetCurrentProductCartFailure,
  loadGetCurrentProductCartSuccess,
} from '../actions/get-current-product-cart.actions';

@Injectable()
export class GetCurrentProductCartEffects {
  constructor(
    private actions$: Actions,
    private productCartService: ProductCartService
  ) {}

  public getCurrentProductCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetCurrentProductCart),
      mergeMap(() => {
        return this.productCartService.getCurrentProductCarts().pipe(
          map((currentProductCarts) => {
            console.log('currentProductCarts ', currentProductCarts);
            return loadGetCurrentProductCartSuccess({ currentProductCarts });
          }),
          catchError((e) => {
            console.log('currentProductCarts err', e);
            return of(loadGetCurrentProductCartFailure({ error: `${e}` }));
          })
        );
      })
    );
  });
}
