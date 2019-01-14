import { PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { OrderByDatePipe } from './order-by-date.pipe';

describe('OrderByDatePipe', () => {
  let pipe: PipeTransform;

  beforeEach(() => {
    pipe = new OrderByDatePipe();
  });

  it('should correctly sort objects with date field', () => {
    const objects = [
      { id: 1, date: moment('2018-11-11').toDate() },
      { id: 2, date: moment('2018-06-30').toDate() },
      { id: 3, date: moment('2019-01-07').toDate() }
    ];
    const transformedIds = pipe.transform(objects).map(item => item.id);

    expect(transformedIds).toEqual([3, 1, 2]);
  });
});
