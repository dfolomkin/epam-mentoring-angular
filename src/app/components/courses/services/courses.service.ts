import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { retry, catchError, mergeMap, finalize } from 'rxjs/operators';
import { max } from 'lodash';

import { ICourse } from '../interfaces/courses.interface';
import { LoaderService } from 'src/app/commons/services/loader.service';
import { BACK_URL, ROUTES_MAP } from 'src/app/commons/constants';

export const getNewId = (courses: ICourse[]): number => {
  const ids = courses && courses.map(item => item.id);

  return ids && ids.length ? max(ids) + 1 : 1;
};

@Injectable()
export class CoursesService {
  getCoursesSubscription: Subscription;

  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  getCourses(): Observable<ICourse[]> {
    this.loaderService.showLoader();

    return this.http.get<ICourse[]>(`${BACK_URL}/${ROUTES_MAP.courses}`).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.error(err.error);
        return [];
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      })
    );
  }

  getCoursesByParams(
    query: string,
    start: number,
    count: number
  ): Observable<ICourse[]> {
    this.loaderService.showLoader();

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
        }),
        finalize(() => {
          this.loaderService.hideLoader();
        })
      );
  }

  getCourseById(id: number): Observable<ICourse | {}> {
    this.loaderService.showLoader();

    return this.http
      .get<ICourse | {}>(`${BACK_URL}/${ROUTES_MAP.courses}/${id}`)
      .pipe(
        retry(3),
        catchError((err: HttpErrorResponse) => {
          console.error(err.error);
          return [];
        }),
        finalize(() => {
          this.loaderService.hideLoader();
        })
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
      }),
      finalize(() => {
        this.loaderService.hideLoader();
      })
    );
    this.loaderService.showLoader();

    return postObservable;
  }

  updateCourse(course: ICourse): Observable<any> {
    this.loaderService.showLoader();

    return this.http
      .put<any>(`${BACK_URL}/${ROUTES_MAP.courses}/${course.id}`, course)
      .pipe(
        finalize(() => {
          this.loaderService.hideLoader();
        })
      );
  }

  deleteCourse(id: number): Observable<any> {
    this.loaderService.showLoader();

    return this.http
      .delete<any>(`${BACK_URL}/${ROUTES_MAP.courses}/${id}`)
      .pipe(
        finalize(() => {
          this.loaderService.hideLoader();
        })
      );
  }
}
