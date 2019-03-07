import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { IAuthPair, IResWithToken } from '../interfaces/auth.interface';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout Success',
  AuthActionFailure = '[Auth] Auth Action Failure',
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

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor() {}
}

export class LogoutSuccess implements Action {
  readonly type = AuthActionTypes.LogoutSuccess;

  constructor() {}
}

export class AuthActionFailure implements Action {
  readonly type = AuthActionTypes.AuthActionFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export class GetCurrentAuthPair implements Action {
  readonly type = AuthActionTypes.GetCurrentAuthPair;

  constructor() {}
}

export type AuthActionUnion =
  | Login
  | LoginSuccess
  | Logout
  | LogoutSuccess
  | AuthActionFailure
  | GetCurrentAuthPair;
