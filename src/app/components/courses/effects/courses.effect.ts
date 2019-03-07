import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { ICourse, IGetCoursesParams } from '../interfaces/courses.interface';
import { CoursesService } from '../services/courses.service';
import {
  CoursesActionTypes,
  GetCourses,
  GetCoursesByParams,
  GetCoursesSuccess,
  SetCoursesServerCount,
  DeleteCourse,
  DeleteCourseSuccess,
  CreateCourse,
  CreateCourseSuccess,
  UpdateCourse,
  UpdateCourseSuccess,
  CoursesActionFailure
} from '../actions/courses.action';
import { ROUTES_MAP } from 'src/app/commons/constants';

@Injectable()
export class CoursesEffects {
  @Effect()
  getCourses$ = this.actions$.pipe(
    ofType(CoursesActionTypes.GetCourses),
    exhaustMap(() =>
      this.coursesService.getCourses().pipe(
        map((courses: ICourse[]) => new GetCoursesSuccess(courses)),
        catchError((err: HttpErrorResponse) =>
          of(new CoursesActionFailure(err))
        )
      )
    )
  );

  @Effect()
  getCoursesSuccess$ = this.actions$.pipe(
    ofType(CoursesActionTypes.GetCoursesSuccess),
    exhaustMap(() =>
      this.coursesService.getCoursesServerCount().pipe(
        map((res: any) => new SetCoursesServerCount(res.count)),
        catchError((err: HttpErrorResponse) =>
          of(new CoursesActionFailure(err))
        )
      )
    )
  );

  @Effect()
  getCoursesWithParams$ = this.actions$.pipe(
    ofType(CoursesActionTypes.GetCoursesByParams),
    map((action: GetCoursesByParams): IGetCoursesParams => action.payload),
    exhaustMap((params: IGetCoursesParams) =>
      this.coursesService
        .getCoursesByParams(
          params.searchQuery,
          params.startFrom,
          params.dataCount
        )
        .pipe(
          map((courses: ICourse[]) => new GetCoursesSuccess(courses)),
          catchError((err: HttpErrorResponse) =>
            of(new CoursesActionFailure(err))
          )
        )
    )
  );

  @Effect()
  deleteCourse$ = this.actions$.pipe(
    ofType(CoursesActionTypes.DeleteCourse),
    map((action: DeleteCourse): number => action.payload),
    exhaustMap((id: number) =>
      this.coursesService.deleteCourse(id).pipe(
        map(() => new DeleteCourseSuccess(id)),
        catchError((err: HttpErrorResponse) =>
          of(new CoursesActionFailure(err))
        )
      )
    )
  );

  @Effect()
  deleteCourseSuccess$ = this.actions$.pipe(
    ofType(CoursesActionTypes.DeleteCourseSuccess),
    map((action: DeleteCourseSuccess): number => action.payload),
    tap((id: number) => {
      console.log(`Course with id = ${id} has been deleted.`);
    }),
    map(() => new GetCourses())
  );

  @Effect()
  createCourse$ = this.actions$.pipe(
    ofType(CoursesActionTypes.CreateCourse),
    map((action: CreateCourse): Partial<ICourse> => action.payload),
    exhaustMap((course: Partial<ICourse>) =>
      this.coursesService.createCourse(course).pipe(
        map(() => new CreateCourseSuccess()),
        catchError((err: HttpErrorResponse) =>
          of(new CoursesActionFailure(err))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  createCourseSuccess$ = this.actions$.pipe(
    ofType(CoursesActionTypes.CreateCourseSuccess),
    tap(() => {
      console.log('New course has been added.');
      this.router.navigate([`/${ROUTES_MAP.courses}`]);
    })
  );

  @Effect()
  updateCourse$ = this.actions$.pipe(
    ofType(CoursesActionTypes.UpdateCourse),
    map((action: UpdateCourse): Partial<ICourse> => action.payload),
    exhaustMap((course: Partial<ICourse>) =>
      this.coursesService.updateCourse(course).pipe(
        map(() => new UpdateCourseSuccess(course.id)),
        catchError((err: HttpErrorResponse) =>
          of(new CoursesActionFailure(err))
        )
      )
    )
  );

  @Effect({ dispatch: false })
  updateCourseSuccess$ = this.actions$.pipe(
    ofType(CoursesActionTypes.UpdateCourseSuccess),
    map((action: UpdateCourseSuccess): number => action.payload),
    tap((id: number) => {
      console.log(`Course with id = ${id} has been updated.`);
      this.router.navigate([`/${ROUTES_MAP.courses}`]);
    })
  );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
