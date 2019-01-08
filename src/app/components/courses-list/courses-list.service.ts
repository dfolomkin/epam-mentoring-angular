import { Injectable } from '@angular/core';

import { coursesMock, ICourse } from '../../commons/constants';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {
  constructor() {}

  getCourses(): ICourse[] {
    return coursesMock;
  }
}
