import { createSelector } from '@ngrx/store';

import { IAuthPair } from 'src/app/components/auth/interfaces/auth.interface';
import { ICourse } from 'src/app/commons/interfaces/course.interface';

export interface IAppState {
  authPair: IAuthPair;
  courses: ICourse[];
}

export const initialAppState: IAppState = {
  authPair: {} as IAuthPair,
  courses: []
};

const selectAuthPair = (state: IAppState) => state.authPair;

export const getAuthLogin = createSelector(
  selectAuthPair,
  (authPairState: IAuthPair) => authPairState.login
);

export const selectCourses = (state: IAppState) => state.courses;
