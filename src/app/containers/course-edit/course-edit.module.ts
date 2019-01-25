import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseEditComponent } from './course-edit.component';

import { CoursesService } from '../../commons/services/courses.service';

@NgModule({
  declarations: [CourseEditComponent],
  imports: [CommonModule, FormsModule],
  bootstrap: [CourseEditComponent],
  providers: [CoursesService]
})
export class CourseEditModule {}
