import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from 'src/app/commons/interfaces/course.interface';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(courses: ICourse[], filterQuery: string): ICourse[] {
    if (!filterQuery) {
      return courses;
    }
    return courses.filter(
      course =>
        course.title.toLowerCase().indexOf(filterQuery.toLowerCase()) !== -1
    );
  }
}
