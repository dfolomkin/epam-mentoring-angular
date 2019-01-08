import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from './course-card.component';
import { DurationPipe } from './course-card.pipe';

@NgModule({
  declarations: [CourseCardComponent, DurationPipe],
  imports: [CommonModule],
  exports: [CourseCardComponent],
  bootstrap: [CourseCardComponent]
})
export class CourseCardModule {}
