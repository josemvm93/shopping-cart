import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './layout.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [LayoutComponent, MainComponent, Error404Component, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }
