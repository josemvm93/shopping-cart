import { Injectable } from '@angular/core';
import { ProductCartService } from '@core/services/product-cart.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap } from 'rxjs/operators';
import {
  loadDeleteProductCart,
  loadDeleteProductCartFailure,
  loadDeleteProductCartSuccess,
} from '../actions/delete-product-cart.actions';

@Injectable()
export class DeleteProductCartEffects {
  constructor(
    private actions$: Actions,
    private productCartService: ProductCartService
  ) {}

  public deleteProductCart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadDeleteProductCart),
      mergeMap(async ({ productCart }) => {
        return this.productCartService
          .deleteProductCart(productCart)
          .then(() => loadDeleteProductCartSuccess({ productCart }))
          .catch((e) => loadDeleteProductCartFailure({ error: `${e}` }));
      })
    );
  });
}
