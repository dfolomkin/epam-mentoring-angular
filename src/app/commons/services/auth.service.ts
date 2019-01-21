import { Injectable } from '@angular/core';
import * as ngStorage from 'ngstorage';
import { remove, isEmpty } from 'lodash';

import { getSequence } from '../constants';

interface IAuthPair {
  login: string;
  password: string;
}

@Injectable()
export class AuthService {
  authPair: IAuthPair;

  constructor(private $localStorage = ngStorage.$localStorage) {}

  login(pair: IAuthPair): void {
    this.authPair = pair;
    this.$localStorage.token = getSequence();
  }

  logout(): void {
    this.authPair = {} as IAuthPair;
    remove(this.$localStorage, 'token');
  }

  getUserInfo(): string {
    return this.authPair.login;
  }

  isAuthenticated(): boolean {
    return !isEmpty(this.authPair);
  }
}
