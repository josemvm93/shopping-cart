import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { LayoutComponent } from './layout.component';
import { Error404Component } from './components/error404/error404.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SiderComponent } from './components/sider/sider.component';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    MainComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SiderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutModule { }
