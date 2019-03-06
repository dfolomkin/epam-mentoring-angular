import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { IAuthPair, IResWithToken } from '../interfaces/auth.interface';
import { AuthService } from '../services/auth.service';
import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  AuthActionFailure
} from '../actions/auth.action';

import { ROUTES_MAP } from 'src/app/commons/constants';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((authPair: IAuthPair) =>
      this.authService.login(authPair).pipe(
        map((resWithToken: IResWithToken) => new LoginSuccess(resWithToken)),
        catchError((err: HttpErrorResponse) => of(new AuthActionFailure(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    map((action: LoginSuccess) => action.payload),
    tap((resWithToken: IResWithToken) => {
      localStorage.setItem('token', resWithToken.token);
    }),
    tap(() => this.router.navigate([`/${ROUTES_MAP.courses}`]))
  );

  @Effect({ dispatch: false })
  authActionFailure$ = this.actions$.pipe(
    ofType(AuthActionTypes.AuthActionFailure),
    map((action: AuthActionFailure) => console.error(action.payload.error)),
    tap(() => this.router.navigate([`/${ROUTES_MAP.auth}`]))
  );

  @Effect()
  getCurrentAuthPair$ = this.actions$.pipe(
    ofType(AuthActionTypes.GetCurrentAuthPair),
    exhaustMap(() =>
      this.authService.getCurrentAuthPair().pipe(
        map((resWithToken: IResWithToken) => new LoginSuccess(resWithToken)),
        catchError((err: HttpErrorResponse) => of(new AuthActionFailure(err)))
      )
    )
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    exhaustMap(() =>
      this.authService.logout().pipe(
        map(() => {
          localStorage.removeItem('token');
        }),
        catchError((err: HttpErrorResponse) => of(new AuthActionFailure(err)))
      )
    ),
    tap(() => this.router.navigate([`/${ROUTES_MAP.auth}`]))
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
