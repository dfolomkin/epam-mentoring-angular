import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from '../../../commons/interfaces/course.interface';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(courses: ICourse[], searchQuery: string): ICourse[] {
    if (!searchQuery) {
      return courses;
    }
    return courses.filter(
      course =>
        course.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  }
}
