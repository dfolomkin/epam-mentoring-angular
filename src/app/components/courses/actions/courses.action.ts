import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { ICourse } from '../interfaces/courses.interface';

export enum CoursesActionTypes {
  GetCourses = '[Courses] Get Courses',
  GetCoursesSuccess = '[Courses] Get Courses Success',
  CoursesActionFailure = '[Courses] Courses Action Failure',
  DeleteCourse = '[Courses] Delete Course'
}

export class GetCourses implements Action {
  readonly type = CoursesActionTypes.GetCourses;

  constructor() {}
}

export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.GetCoursesSuccess;

  constructor(public payload: ICourse[]) {}
}

export class CoursesActionFailure implements Action {
  readonly type = CoursesActionTypes.CoursesActionFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DeleteCourse;

  constructor(public payload: number) {}
}

export type CoursesActionUnion =
  | GetCourses
  | GetCoursesSuccess
  | CoursesActionFailure
  | DeleteCourse;
