import { Action } from '@ngrx/store';

import { DataChunkSize } from '../interfaces/courses-control.interface';

export enum CoursesActionTypes {
  SetCoursesFilter = '[Courses-Control] Set Courses Filter',
  SetCoursesSearch = '[Courses-Control] Set Courses Search',
  SetCoursesChunkSize = '[Courses-Control] Set Courses Chunk Size',
  SetCoursesCount = '[Courses-Control] Set Courses Count'
}

export class SetCoursesFilter implements Action {
  readonly type = CoursesActionTypes.SetCoursesFilter;

  constructor(public payload: string) {}
}
export class SetCoursesSearch implements Action {
  readonly type = CoursesActionTypes.SetCoursesSearch;

  constructor(public payload: string) {}
}

export class SetCoursesChunkSize implements Action {
  readonly type = CoursesActionTypes.SetCoursesChunkSize;

  constructor(public payload: DataChunkSize) {}
}

export class SetCoursesCount implements Action {
  readonly type = CoursesActionTypes.SetCoursesCount;

  constructor(public payload: number) {}
}

export type CoursesActionUnion =
  | SetCoursesFilter
  | SetCoursesSearch
  | SetCoursesChunkSize
  | SetCoursesCount;
