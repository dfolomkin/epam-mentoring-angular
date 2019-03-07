import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { ICourse, IGetCoursesParams } from '../interfaces/courses.interface';

export enum CoursesActionTypes {
  GetCourses = '[Courses] Get Courses',
  GetCoursesByParams = '[Courses] Get Courses By Params',
  GetCoursesSuccess = '[Courses] Get Courses Success',
  SetCoursesServerCount = '[Courses] Set Courses Server Count',
  DeleteCourse = '[Courses] Delete Course',
  DeleteCourseSuccess = '[Courses] Delete Course Success',
  CreateCourse = '[Courses] Create Course',
  CreateCourseSuccess = '[Courses] Create Course Success',
  UpdateCourse = '[Courses] Update Course',
  UpdateCourseSuccess = '[Courses] Update Course Success',
  CoursesActionFailure = '[Courses] Courses Action Failure'
}

export class GetCourses implements Action {
  readonly type = CoursesActionTypes.GetCourses;

  constructor() {}
}

export class GetCoursesByParams implements Action {
  readonly type = CoursesActionTypes.GetCoursesByParams;

  constructor(public payload: IGetCoursesParams) {}
}

export class GetCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.GetCoursesSuccess;

  constructor(public payload: ICourse[]) {}
}

export class SetCoursesServerCount implements Action {
  readonly type = CoursesActionTypes.SetCoursesServerCount;

  constructor(public payload: number) {}
}

export class DeleteCourse implements Action {
  readonly type = CoursesActionTypes.DeleteCourse;

  constructor(public payload: number) {}
}

export class DeleteCourseSuccess implements Action {
  readonly type = CoursesActionTypes.DeleteCourseSuccess;

  constructor(public payload: number) {}
}

export class CreateCourse implements Action {
  readonly type = CoursesActionTypes.CreateCourse;

  constructor(public payload: Partial<ICourse>) {}
}

export class CreateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.CreateCourseSuccess;

  constructor() {}
}

export class UpdateCourse implements Action {
  readonly type = CoursesActionTypes.UpdateCourse;

  constructor(public payload: Partial<ICourse>) {}
}

export class UpdateCourseSuccess implements Action {
  readonly type = CoursesActionTypes.UpdateCourseSuccess;

  constructor(public payload: number) {}
}

export class CoursesActionFailure implements Action {
  readonly type = CoursesActionTypes.CoursesActionFailure;

  constructor(public payload: HttpErrorResponse) {}
}

export type CoursesActionUnion =
  | GetCourses
  | GetCoursesByParams
  | GetCoursesSuccess
  | SetCoursesServerCount
  | DeleteCourse
  | DeleteCourseSuccess
  | CreateCourse
  | CreateCourseSuccess
  | UpdateCourse
  | UpdateCourseSuccess
  | CoursesActionFailure;
