import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import { ICourse } from '../interfaces/courses.interface';
import { CoursesService } from '../services/courses.service';
import {
  CoursesActionTypes,
  GetCourses,
  GetCoursesSuccess,
  CoursesActionFailure,
  DeleteCourse
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
  deleteCourse$ = this.actions$.pipe(
    ofType(CoursesActionTypes.DeleteCourse),
    map((action: DeleteCourse) => action.payload),
    exhaustMap((id: number) =>
      this.coursesService.deleteCourse(id).pipe(
        tap(() => console.log(`Course with id = ${id} has been deleted.`)),
        map(() => new GetCourses()),
        catchError((err: HttpErrorResponse) =>
          of(new CoursesActionFailure(err))
        )
      )
    )
  );

  // @Effect({ dispatch: false })
  // loginSuccess$ = this.actions$.pipe(
  //   ofType(AuthActionTypes.LoginSuccess),
  //   map((action: LoginSuccess) => action.payload),
  //   tap((resWithToken: IResWithToken) => {
  //     localStorage.setItem('token', resWithToken.token);
  //   }),
  //   tap(() => this.router.navigate([`/${ROUTES_MAP.courses}`]))
  // );

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private router: Router
  ) {}
}
