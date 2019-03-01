import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { IAuthPair, IResWithToken } from '../interfaces/auth.interface';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Logout = '[Auth] Logout',
  GetCurrentAuthPair = '[Auth] Get Current Auth Pair'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: IAuthPair) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: IResWithToken) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export class GetCurrentAuthPair implements Action {
  readonly type = AuthActionTypes.GetCurrentAuthPair;

  constructor() {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor() {}
}

export type AuthActionUnion =
  | Login
  | LoginSuccess
  | LoginFailure
  | GetCurrentAuthPair
  | Logout;
