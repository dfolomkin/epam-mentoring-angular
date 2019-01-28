import { Injectable } from '@angular/core';

import { getSequence } from 'src/app/commons/constants';

export interface IAuthPair {
  login: string;
  password: string;
}

@Injectable()
export class AuthService {
  authPair: IAuthPair;

  constructor() {}

  login(pair: IAuthPair): void {
    this.authPair = pair;
    localStorage.setItem('token', getSequence());
  }

  logout(): void {
    this.authPair = undefined as IAuthPair;
    localStorage.removeItem('token');
  }

  getUserInfo(): string | undefined {
    return this.authPair && this.authPair.login;
  }

  isAuthed(): boolean {
    return !!(this.authPair && this.authPair.login);
  }
}
