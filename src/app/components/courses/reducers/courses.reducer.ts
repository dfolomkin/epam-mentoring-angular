import {
  CoursesActionUnion,
  CoursesActionTypes
} from '../actions/courses.action';
import { initialAppState } from 'src/app/app.state';
import { ICourse } from '../interfaces/courses.interface';

export const coursesReducer = (
  state = initialAppState.courses,
  action: CoursesActionUnion
): ICourse[] => {
  switch (action.type) {
    case CoursesActionTypes.GetCoursesSuccess: {
      return action.payload;
    }

    default:
      return state;
  }
};
