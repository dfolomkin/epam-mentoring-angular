import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { retry, catchError, mergeMap } from 'rxjs/operators';
import { max } from 'lodash';

import { BACK_URL, ROUTES_MAP } from 'src/app/commons/constants';
import { ICourse } from 'src/app/commons/interfaces/course.interface';

export const getNewId = (courses: ICourse[]): number => {
  const ids = courses && courses.map(item => item.id);

  return ids && ids.length ? max(ids) + 1 : 1;
};

@Injectable()
export class CoursesService {
  getCoursesSubscription: Subscription;

  constructor(private http: HttpClient) {}

  getCourses(): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(`${BACK_URL}/${ROUTES_MAP.courses}`).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.error(err.error);
        return [];
      })
    );
  }

  getCoursesByParams(
    query: string,
    start: number,
    count: number
  ): Observable<ICourse[]> {
    return this.http
      .get<ICourse[]>(
        `${BACK_URL}/${ROUTES_MAP.courses}?${
          query ? 'query=' + query + '&' : ''
        }start=${start}&count=${count}`
      )
      .pipe(
        retry(3),
        catchError((err: HttpErrorResponse) => {
          console.error(err.error);
          return [];
        })
      );
  }

  getCourseById(id: number): Observable<ICourse | {}> {
    return this.http.get<ICourse | {}>(
      `${BACK_URL}/${ROUTES_MAP.courses}/${id}`
    );
  }

  createCourse(course: Partial<ICourse>): Observable<any> {
    const postObservable = this.getCourses().pipe(
      mergeMap((courses: ICourse[]) => {
        const newCourse = { id: getNewId(courses), ...course };

        return this.http.post<any>(
          `${BACK_URL}/${ROUTES_MAP.courses}`,
          newCourse
        );
      })
    );

    return postObservable;
  }

  updateCourse(course: ICourse): Observable<any> {
    return this.http.put<any>(
      `${BACK_URL}/${ROUTES_MAP.courses}/${course.id}`,
      course
    );
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete<any>(`${BACK_URL}/${ROUTES_MAP.courses}/${id}`);
  }
}
