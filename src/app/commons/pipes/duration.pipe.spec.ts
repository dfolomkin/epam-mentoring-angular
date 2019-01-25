import { PipeTransform } from '@angular/core';

import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: PipeTransform;

  beforeEach(() => {
    pipe = new DurationPipe();
  });

  it('should return correct string values', () => {
    expect(pipe.transform(120)).toBe('2h 0m');
    expect(pipe.transform(90)).toBe('1h 30m');
    expect(pipe.transform(30)).toBe('30m');
  });

  it('should return empty string if input is undefined', () => {
    expect(pipe.transform(undefined)).toBe('');
  });
});
