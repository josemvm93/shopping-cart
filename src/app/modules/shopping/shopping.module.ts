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
import { GetCurrentCartEffects } from '@app/store/carts/effects/get-current-cart.effects';
import {
  cartFeatureKey,
  cartReducer,
} from '@app/store/carts/reducers/cart.reducer';
import {
  productCartFeatureKey,
  productCartReducer,
} from '@app/store/product-cart/reducers/product-cart.reducer';
import {
  currentCartFeatureKey,
  currentCartReducer,
} from '@app/store/carts/reducers/current-cart.reducer';
import { GetProductCartEffects } from '@app/store/product-cart/effects/get-product-cart.effects';
import { AddProductCartEffects } from '@app/store/product-cart/effects/add-product-cart.effects';
import { GetCurrentProductCartEffects } from '@app/store/product-cart/effects/get-current-product-cart.effects';
import {
  currentProductCartFeatureKey,
  currentProductCartReducer,
} from '@app/store/product-cart/reducers/current-product-cart.reducer';
import { UpdateProductCartEffects } from '@app/store/product-cart/effects/update-product-cart.effects';
import { DeleteProductCartEffects } from '@app/store/product-cart/effects/delete-product-cart.effects';
import { AddCartEffects } from '@app/store/carts/effects/add-cart.effects';
import { UpdateCartEffects } from '@app/store/carts/effects/update-cart.effects';

@NgModule({
  declarations: [ShopComponent, CartComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    SharedModule,
    CoreModule,
    FrameworkModule,
    StoreModule.forFeature(productsFeatureKey, productReducer),
    StoreModule.forFeature(cartFeatureKey, cartReducer),
    StoreModule.forFeature(productCartFeatureKey, productCartReducer),
    StoreModule.forFeature(currentCartFeatureKey, currentCartReducer),
    StoreModule.forFeature(
      currentProductCartFeatureKey,
      currentProductCartReducer
    ),
    EffectsModule.forFeature([
      AddCartEffects,
      UpdateCartEffects,
      GetCurrentCartEffects,

      GetProductsEffects,

      GetProductCartEffects,
      AddProductCartEffects,
      UpdateProductCartEffects,
      DeleteProductCartEffects,
      GetCurrentProductCartEffects,
    ]),
  ],
})
export class ShoppingModule {}
