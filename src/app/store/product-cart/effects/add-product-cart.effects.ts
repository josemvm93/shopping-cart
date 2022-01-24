import { Injectable } from '@angular/core';
import { ProductCartService } from '@core/services/product-cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import {
  loadAddProductCart,
  loadAddProductCartFailure,
  loadAddProductCartSelected,
  loadAddProductCartSuccess,
} from '../actions/add-product-cart.actions';

@Injectable()
export class AddProductCartEffects {
  constructor(
    private actions$: Actions,
    private productCartService: ProductCartService
  ) {}

  public addProductCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadAddProductCart),
      mergeMap(async ({ productCart }) => {
        return this.productCartService
          .addProductCart(productCart)
          .then(() => loadAddProductCartSuccess({ productCart }))
          .catch((e) => loadAddProductCartFailure({ error: `${e}` }));
      })
    );
  });
}
