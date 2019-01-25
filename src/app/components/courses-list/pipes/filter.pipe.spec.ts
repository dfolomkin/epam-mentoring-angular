import { PipeTransform } from '@angular/core';

import { FilterPipe } from './filter.pipe';

import { ICourse } from '../../../commons/interfaces/course.interface';

describe('FilterPipe', () => {
  let pipe: PipeTransform;
  let coursesMock: ICourse[];

  beforeEach(() => {
    pipe = new FilterPipe();
    coursesMock = [
      { title: 'Redhold' },
      { title: 'Bitchip' },
      { title: 'Opela' }
    ] as ICourse[];
  });

  it('should return correctly filtered array', () => {
    expect(pipe.transform(coursesMock, 'Red')).toEqual([{ title: 'Redhold' }]);
    expect(pipe.transform(coursesMock, 'Bit')).toEqual([{ title: 'Bitchip' }]);
    expect(pipe.transform(coursesMock, 'e')).toEqual([
      { title: 'Redhold' },
      { title: 'Opela' }
    ]);
    expect(pipe.transform(coursesMock, 'p')).toEqual([
      { title: 'Bitchip' },
      { title: 'Opela' }
    ]);
  });
});
