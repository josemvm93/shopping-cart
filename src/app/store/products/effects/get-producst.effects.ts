import { Injectable } from '@angular/core';
import { ProductsService } from '@core/services/products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadGetProducts,
  loadGetProductsSuccess,
  loadGetProductsFailure,
} from '../actions/get-products.actions';

@Injectable()
export class GetProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  public getProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGetProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => loadGetProductsSuccess({ products })),
          catchError((e) => of(loadGetProductsFailure({ error: `${e}` })))
        );
      })
    );
  });
}
