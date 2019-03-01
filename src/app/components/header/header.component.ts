import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IAppState, getAuthLogin } from 'src/app/app.state';
import { Logout } from 'src/app/components/auth/actions/auth.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  login$: Observable<string>;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.login$ = this.store$.pipe(select(getAuthLogin));
  }

  onLogoutClick() {
    this.store$.dispatch(new Logout());
  }
}
