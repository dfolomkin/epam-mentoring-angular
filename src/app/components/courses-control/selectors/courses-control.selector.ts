import { createSelector } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { ICoursesControls } from '../interfaces/courses-control.interface';

const selectCoursesControls = (state: IAppState) => state.coursesControls;

export const getFilterQuery = createSelector(
  selectCoursesControls,
  (coursesControlsState: ICoursesControls) => coursesControlsState.filterQuery
);

export const getSearchQuery = createSelector(
  selectCoursesControls,
  (coursesControlsState: ICoursesControls) => coursesControlsState.searchQuery
);

export const getDataChunkSize = createSelector(
  selectCoursesControls,
  (coursesControlsState: ICoursesControls) => coursesControlsState.dataChunkSize
);

export const getDataCount = createSelector(
  selectCoursesControls,
  (coursesControlsState: ICoursesControls) => coursesControlsState.dataCount
);
