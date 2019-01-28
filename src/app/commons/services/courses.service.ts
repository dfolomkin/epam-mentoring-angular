import { Injectable } from '@angular/core';
import { max, remove } from 'lodash';

import { COURSES } from 'src/app/commons/constants';
import { ICourse } from 'src/app/commons/interfaces/course.interface';

export const getNewId = (courses: ICourse[]): number => {
  const ids = courses.map(item => item.id);

  return ids.length ? max(ids) + 1 : 1;
};

@Injectable()
export class CoursesService {
  courses: ICourse[];

  constructor() {
    this.courses = COURSES;
  }

  getCourses(): ICourse[] {
    return this.courses;
  }

  getCourseById(id: number): ICourse | {} {
    return this.courses.find(item => item.id === id) || {};
  }

  createCourse(course: Partial<ICourse>): ICourse[] {
    const newCourse = { id: getNewId(this.courses), ...course } as ICourse;
    this.courses.push(newCourse);

    return this.courses;
  }

  updateCourse(id: number, course: Partial<ICourse>): ICourse[] {
    this.courses = this.courses.map(item =>
      item.id === id ? { ...item, ...course } : item
    );

    return this.courses;
  }

  deleteCourse(id: number): ICourse[] {
    remove(this.courses, item => item.id === id);

    return this.courses;
  }
}
