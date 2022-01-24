import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { ShopComponent } from './windows/shop/shop.component';
import { FrameworkModule } from '../../framework/framework.module';
import { CartComponent } from './windows/cart/cart.component';
import { GetPendingCartEffects } from '@app/store/carts/effects/get-pending-cart.effects';
import { cartFeatureKey, cartReducer } from '@app/store/carts/reducers/cart.reducer';

@NgModule({
  declarations: [ShopComponent, CartComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule,
    CoreModule,
    FrameworkModule,
    EffectsModule.forFeature([GetProductsEffects, GetPendingCartEffects]),
    StoreModule.forFeature(productsFeatureKey, productReducer),
    StoreModule.forFeature(cartFeatureKey, cartReducer)
  ],
})
export class ShoppingModule {}
