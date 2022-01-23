import { Component, OnInit } from '@angular/core';
import { loadSignout } from '@app/store/auth/actions/sign-out.actions';
import { State } from '@app/store/auth/reducer/auth.reducer';
import { UserModel } from '@core/models/user.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAuthUser } from '@app/store/auth/selectors/auth.selector';
import { loadCheckAuth } from '@app/store/auth/actions/check-auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<UserModel>;

  constructor(private authStore: Store<State>) {}

  ngOnInit(): void {
    this.authStore.dispatch(loadCheckAuth());
    this.user$ = this.authStore.select(getAuthUser);
  }

  logOut(): void {
    this.authStore.dispatch(loadSignout());
  }

  getUserName(user: UserModel): string {
    return user?.name || '-';
  }

  getPhotoUrl(user: UserModel): string {
    return user?.photoUrl;
  }
}
