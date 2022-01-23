import { Component, OnInit } from '@angular/core';
import { loadCheckAuth } from '@app/store/auth/actions/check-auth.actions';
import { loadSignInGoogle } from '@app/store/auth/actions/sign-in-google.actions';
import { State } from '@app/store/auth/reducer/auth.reducer';
import { getAuthLoading } from '@app/store/auth/selectors/auth.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authLoading$: Observable<boolean>;

  constructor(private authStore: Store<State>) {}

  ngOnInit(): void {
    this.authStore.dispatch(loadCheckAuth());
    this.authLoading$ = this.authStore.select(getAuthLoading);
  }

  signInGoogle(): void {
    this.authStore.dispatch(loadSignInGoogle());
  }
}
