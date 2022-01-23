import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOutGuard } from '@core/guards/sign-out.guard';
import { LoginComponent } from '@modules/layout/components/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CheckAuthEffects } from './effects/check-auth.effects';
import { SignInGoogleEffects } from './effects/sign-in-google.effects';
import { SignoutEffects } from './effects/sign-out.effects';
import { authFeatureKey, reducer } from './reducer/auth.reducer';
import { CoreModule } from '../../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [SignOutGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([
      CheckAuthEffects,
      SignInGoogleEffects,
      SignoutEffects,
    ]),
  ],
})
export class AuthModule {}
