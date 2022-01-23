import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyModule } from './windows/buy/buy.module';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { GetProductsEffects } from '@app/store/products/effects/get-producst.effects';
import { StoreModule } from '@ngrx/store';
import {
  productReducer,
  productsFeatureKey,
} from '@app/store/products/reducers/products.reducers';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    BuyModule,
    SharedModule,
    CoreModule,
    EffectsModule.forFeature([GetProductsEffects]),
    StoreModule.forFeature(productsFeatureKey, productReducer),
  ],
})
export class ShoppingModule {}
