import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isEmpty } from 'lodash';

import { BACK_URL, ROUTES_MAP } from 'src/app/commons/constants';

export interface IAuthPair {
  login: string;
  password: string;
}

interface IResWithToken {
  token: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authPair: IAuthPair): void {
    this.http
      .post<IResWithToken>(`${BACK_URL}/${ROUTES_MAP.auth}`, authPair)
      .subscribe(
        (res: IResWithToken) => {
          localStorage.setItem('token', res.token);
        },
        (err: HttpErrorResponse) => console.error(err.error)
      );
  }

  logout(): void {
    this.http.delete<any>(`${BACK_URL}/${ROUTES_MAP.auth}`).subscribe(() => {
      localStorage.removeItem('token');
    });
  }

  getUserInfo(): Observable<IAuthPair> {
    return this.http.get<IAuthPair>(`${BACK_URL}/${ROUTES_MAP.auth}`);
  }

  isAuthed(): Observable<boolean> {
    return this.http.get<IAuthPair>(`${BACK_URL}/${ROUTES_MAP.auth}`).pipe(
      map(
        (pair: IAuthPair): boolean => {
          return !isEmpty(pair) && !!localStorage.getItem('token');
        }
      )
    );
  }
}
