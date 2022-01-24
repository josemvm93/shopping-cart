import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-list/product-item/product-item.component';
import { SharedModule } from '@shared/shared.module';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, SpinnerComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductListComponent, SpinnerComponent],
})
export class FrameworkModule {}
