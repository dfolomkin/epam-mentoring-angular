import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseCardComponent } from './course-card.component';
import { CourseCardBorderDirective } from './directives/course-card-border.directive';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomPipesModule } from 'src/app/commons/pipes/custom-pipes.module';

@NgModule({
  declarations: [CourseCardComponent, CourseCardBorderDirective],
  imports: [CommonModule, AppRoutingModule, CustomPipesModule],
  exports: [CourseCardComponent],
  bootstrap: [CourseCardComponent]
})
export class CourseCardModule {}
