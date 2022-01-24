import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInGuard } from './guards/sign-in.guard';
import { SignOutGuard } from './guards/sign-out.guard';
import { AuthService } from './services/auth.service';
import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';
import { ProductCartService } from './services/product-cart.service';
import { SpinnerService } from './services/spinner.service';

const guards = [SignInGuard, SignOutGuard];

const services = [
  AuthService,
  ProductsService,
  CartService,
  ProductCartService,
  SpinnerService,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...services, ...guards],
})
export class CoreModule {}
