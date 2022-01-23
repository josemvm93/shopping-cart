import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyModule } from './windows/buy/buy.module';
import { ShoppingRoutingModule } from './shopping-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    BuyModule
  ]
})
export class ShoppingModule { }
