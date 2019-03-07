import { IAuthPair } from 'src/app/components/auth/interfaces/auth.interface';
import { ICoursesState } from 'src/app/components/courses/interfaces/courses.interface';
import {
  ICoursesControls,
  DataChunkSize
} from 'src/app/components/courses-control/interfaces/courses-control.interface';

export interface IAppState {
  authPair: IAuthPair;
  courses: ICoursesState;
  coursesControls: ICoursesControls;
}

export const initialAppState: IAppState = {
  authPair: {} as IAuthPair,
  courses: { list: [], serverCount: 0 },
  coursesControls: {
    filterQuery: '',
    searchQuery: '',
    dataChunkSize: DataChunkSize.chunk30,
    dataCount: DataChunkSize.chunk30
  }
};
