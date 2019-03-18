import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { IAuthor } from '../interfaces/author.interface';
import { BACK_URL, BACK_API_MAP } from 'src/app/commons/constants';

@Injectable()
export class AuthorsService {
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(`${BACK_URL}/${BACK_API_MAP.authors}`).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.error(err.error);
        return [];
      })
    );
  }
}
