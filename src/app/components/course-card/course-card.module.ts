import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from './course-card.component';
import { CourseCardBorderDirective } from './directives/course-card-border.directive';

import { AppRoutingModule } from '../../app-routing.module';
import { PipesModule } from '../../commons/pipes/pipes.module';

@NgModule({
  declarations: [CourseCardComponent, CourseCardBorderDirective],
  imports: [CommonModule, AppRoutingModule, PipesModule],
  exports: [CourseCardComponent],
  bootstrap: [CourseCardComponent]
})
export class CourseCardModule {}
