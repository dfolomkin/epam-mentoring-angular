import { initialAppState } from 'src/app/app.state';
import { ICoursesState } from '../interfaces/courses.interface';
import {
  CoursesActionUnion,
  CoursesActionTypes
} from '../actions/courses.action';

export const coursesReducer = (
  state = initialAppState.courses,
  action: CoursesActionUnion
): ICoursesState => {
  switch (action.type) {
    case CoursesActionTypes.GetCoursesSuccess: {
      return { ...state, list: action.payload };
    }
    case CoursesActionTypes.SetCoursesServerCount: {
      return { ...state, serverCount: action.payload };
    }

    default:
      return state;
  }
};
