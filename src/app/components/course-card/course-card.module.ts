import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from './course-card.component';
import { CourseCardBorderDirective } from './directives/course-card-border.directive';

import { DurationPipe } from '../../commons/pipes/duration.pipe';

@NgModule({
  declarations: [CourseCardComponent, DurationPipe, CourseCardBorderDirective],
  imports: [CommonModule],
  exports: [CourseCardComponent],
  bootstrap: [CourseCardComponent]
})
export class CourseCardModule {}
