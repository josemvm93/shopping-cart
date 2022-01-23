import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from '@core/guards/sign-in.guard';
import { CartComponent } from './windows/cart/cart.component';
import { ShopComponent } from './windows/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'shop',
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [SignInGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [SignInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingRoutingModule {}
