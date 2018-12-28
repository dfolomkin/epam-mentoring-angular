import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
  transform(duration: number) {
    const minCount: number = Math.floor(duration / 60);
    const secCount: number = duration - minCount * 60;
    return `${minCount} m ${secCount} s`;
  }
}
