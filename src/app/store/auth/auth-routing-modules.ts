import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@modules/layout/components/login/login.component';
import { SignOutGuard } from '@core/guards/sign-out.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [SignOutGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
