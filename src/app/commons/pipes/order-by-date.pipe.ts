import { Pipe, PipeTransform } from '@angular/core';

import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';

@Pipe({
  name: 'orderByDate'
})
export class OrderByDatePipe implements PipeTransform {
  transform(input: ICourse[]): ICourse[] {
    return input.sort((a, b) =>
      a.date > b.date ? -1 : a.date < b.date ? 1 : 0
    );
  }
}
