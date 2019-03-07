import { createSelector } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { ICoursesState } from '../interfaces/courses.interface';

const selectCourses = (state: IAppState) => state.courses;

export const getCoursesList = createSelector(
  selectCourses,
  (coursesState: ICoursesState) => coursesState.list
);

export const getCoursesServerCount = createSelector(
  selectCourses,
  (coursesState: ICoursesState) => coursesState.serverCount
);
