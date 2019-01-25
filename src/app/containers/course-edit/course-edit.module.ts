import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseEditComponent } from './course-edit.component';

import { AppRoutingModule } from '../../app-routing.module';
import { CoursesService } from '../../commons/services/courses.service';
import { PipesModule } from '../../commons/pipes/pipes.module';

@NgModule({
  declarations: [CourseEditComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule, PipesModule],
  bootstrap: [CourseEditComponent],
  providers: [CoursesService]
})
export class CourseEditModule {}
