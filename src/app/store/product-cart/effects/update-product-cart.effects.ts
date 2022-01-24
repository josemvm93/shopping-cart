import { Injectable } from '@angular/core';
import { ProductCartService } from '@core/services/product-cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import {
  loadUpdateProductCart,
  loadUpdateProductCartFailure,
  loadUpdateProductCartSuccess,
} from '../actions/update-product-cart.actions';

@Injectable()
export class UpdateProductCartEffects {
  constructor(
    private actions$: Actions,
    private productCartService: ProductCartService
  ) {}

  public updateProductCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUpdateProductCart),
      mergeMap(async ({ productCart }) => {
        return this.productCartService
          .updateProductCart(productCart)
          .then(() => loadUpdateProductCartSuccess({ productCart }))
          .catch((e) => loadUpdateProductCartFailure({ error: `${e}` }));
      })
    );
  });
}
