import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
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
    return this.http.get<ICourse[]>(`${BACK_URL}/${ROUTES_MAP.courses}`);
  }

  getCoursesByParams(
    query: string,
    start: number,
    count: number
  ): Observable<ICourse[]> {
    return this.http.get<ICourse[]>(
      `${BACK_URL}/${ROUTES_MAP.courses}?${
        query ? 'query=' + query + '&' : ''
      }start=${start}&count=${count}`
    );
  }

  getCourseById(id: number): Observable<ICourse | {}> {
    return this.http.get<ICourse | {}>(
      `${BACK_URL}/${ROUTES_MAP.courses}/${id}`
    );
  }

  createCourse(course: Partial<ICourse>): Observable<{}> {
    const postObservable = this.getCourses().pipe(
      mergeMap((courses: ICourse[]) => {
        const newCourse = { id: getNewId(courses), ...course };

        return this.http.post<{}>(
          `${BACK_URL}/${ROUTES_MAP.courses}`,
          newCourse
        );
      })
    );

    return postObservable;
  }

  updateCourse(course: ICourse): Observable<{}> {
    return this.http.put<{}>(
      `${BACK_URL}/${ROUTES_MAP.courses}/${course.id}`,
      course
    );
  }

  deleteCourse(id: number): Observable<{}> {
    return this.http.delete<{}>(`${BACK_URL}/${ROUTES_MAP.courses}/${id}`);
  }
}
