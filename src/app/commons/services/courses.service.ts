import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { max, remove } from 'lodash';

import { BACK_URL, ROUTES_MAP } from 'src/app/commons/constants';
import { ICourse } from 'src/app/commons/interfaces/course.interface';

export const getNewId = (courses: ICourse[]): number => {
  const ids = courses.map(item => item.id);

  return ids.length ? max(ids) + 1 : 1;
};

@Injectable()
export class CoursesService {
  courses: ICourse[];

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

  getCourseById(id: number): ICourse | {} {
    return this.courses.find(item => item.id === id) || {};
  }

  createCourse(course: Partial<ICourse>): ICourse[] {
    const newCourse = { id: getNewId(this.courses), ...course } as ICourse;
    this.courses.push(newCourse);

    return this.courses;
  }

  updateCourse(id: number, course: Partial<ICourse>): ICourse[] {
    this.courses = this.courses.map(item =>
      item.id === id ? { ...item, ...course } : item
    );

    return this.courses;
  }

  deleteCourse(id: number): Observable<{}> {
    return this.http.delete<{}>(`${BACK_URL}/${ROUTES_MAP.courses}/${id}`);
  }
}
