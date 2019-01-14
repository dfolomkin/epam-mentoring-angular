import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(duration: number) {
    const hCount: number = Math.floor(duration / 60);
    const mCount: number = duration - hCount * 60;
    if (hCount) {
      return `${hCount}h ${mCount}m`;
    } else {
      return `${mCount}m`;
    }
  }
}
