import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IAuthPair, IResWithToken } from '../interfaces/auth.interface';
import { BACK_URL, BACK_API_MAP } from 'src/app/commons/constants';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(authPair: IAuthPair): Observable<IResWithToken> {
    return this.http.post<IResWithToken>(
      `${BACK_URL}/${BACK_API_MAP.auth}`,
      authPair
    );
  }

  logout(): Observable<any> {
    return this.http.delete<any>(`${BACK_URL}/${BACK_API_MAP.auth}`);
  }

  getCurrentAuthPair(): Observable<IResWithToken> {
    return this.http.get<IResWithToken>(`${BACK_URL}/${BACK_API_MAP.auth}`);
  }
}
