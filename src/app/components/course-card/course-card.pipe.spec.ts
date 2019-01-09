import { Pipe, PipeTransform } from '@angular/core';

import { DurationPipe } from './course-card.pipe';

describe('DurationPipe', () => {
  let pipe: PipeTransform;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should return right string values', () => {
    expect(pipe.transform(90)).toBe('1 h 30 m');
    expect(pipe.transform(120)).toBe('2 h 0 m');
    expect(pipe.transform(72)).toBe('1 h 12 m');
  });
});
