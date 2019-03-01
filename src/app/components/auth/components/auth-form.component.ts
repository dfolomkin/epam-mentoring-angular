import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAuthPair } from '../interfaces/auth.interface';
import { Login } from '../actions/auth.action';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.less']
})
export class AuthFormComponent implements OnInit {
  authPair: IAuthPair;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.authPair = { login: '', password: '' };
  }

  onLoginClick() {
    this.store$.dispatch(new Login(this.authPair));
  }
}
