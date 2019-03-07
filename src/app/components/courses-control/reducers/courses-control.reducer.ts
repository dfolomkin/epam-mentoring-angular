import { initialAppState } from 'src/app/app.state';
import { ICoursesControls } from '../interfaces/courses-control.interface';
import {
  CoursesActionUnion,
  CoursesActionTypes
} from '../actions/courses-control.action';

export const coursesControlReducer = (
  state = initialAppState.coursesControls,
  action: CoursesActionUnion
): ICoursesControls => {
  switch (action.type) {
    case CoursesActionTypes.SetCoursesFilter: {
      return { ...state, filterQuery: action.payload };
    }

    case CoursesActionTypes.SetCoursesSearch: {
      return { ...state, searchQuery: action.payload };
    }

    case CoursesActionTypes.SetCoursesChunkSize: {
      return { ...state, dataChunkSize: action.payload };
    }

    case CoursesActionTypes.SetCoursesCount: {
      return { ...state, dataCount: action.payload };
    }

    default:
      return state;
  }
};
