import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(courses: ICourse[], query: string): ICourse[] {
    if (!query) {
      return courses;
    }
    return courses.filter(
      course => course.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
}
