import { coursesMock, ICourse } from '../../commons/constants';

export class CoursesListService {
  constructor() {}

  getCourses(): ICourse[] {
    return coursesMock;
  }
}
