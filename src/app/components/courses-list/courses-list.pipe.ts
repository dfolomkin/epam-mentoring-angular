import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../commons/constants';

@Pipe({ name: 'coursesFilter' })
export class CoursesFilterPipe implements PipeTransform {
  transform(searchInput: string, courses: ICourse[]) {
    return courses.filter(
      course =>
        course.title.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1
    );
  }
}
