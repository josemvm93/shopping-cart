import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInGuard } from '@core/guards/sign-in.guard';
import { BuyComponent } from './windows/buy/buy.component';

const routes: Routes = [
  {
    path: '',
    component: BuyComponent,
    canActivate: [SignInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
