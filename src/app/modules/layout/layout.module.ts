import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './layout.component';
import { Error404Component } from './components/error404/error404.component';


@NgModule({
  declarations: [LayoutComponent, MainComponent, Error404Component],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }
