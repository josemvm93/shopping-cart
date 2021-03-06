import { Injectable } from '@angular/core';
import { ProductCartService } from '@core/services/product-cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadGetProductCart,
  loadGetProductCartFailure,
  loadGetProductCartSuccess,
} from '../actions/get-product-cart.actions';

@Injectable()
export class GetProductCartEffects {
  constructor(
    private actions$: Actions,
    private productCartService: ProductCartService
  ) {}

  public getProductCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetProductCart),
      mergeMap(() => {
        return this.productCartService.getProductCarts().pipe(
          map(() => loadGetProductCartSuccess()),
          catchError((e) => of(loadGetProductCartFailure({ error: `${e}` })))
        );
      })
    );
  });
}
