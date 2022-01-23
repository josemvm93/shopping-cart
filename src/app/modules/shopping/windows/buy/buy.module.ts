import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy.component';
import { FrameworkModule } from '@app/framework/framework.module';



@NgModule({
  declarations: [BuyComponent],
  imports: [
    CommonModule,
    FrameworkModule
  ]
})
export class BuyModule { }
