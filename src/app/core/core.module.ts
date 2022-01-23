import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInGuard } from './guards/sign-in.guard';
import { SignOutGuard } from './guards/sign-out.guard';
import { AuthService } from './services/auth.service';



const guards = [
  SignInGuard,
  SignOutGuard
];

const services = [
  AuthService
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...services,
    ...guards
  ]
})
export class CoreModule { }
