import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';



@NgModule({
  declarations: [ProductListComponent, ProductItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class FrameworkModule { }
