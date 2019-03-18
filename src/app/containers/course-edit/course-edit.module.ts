import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseEditComponent } from './course-edit.component';

import { CourseEditFormModule } from 'src/app/components/course-edit-form/course-edit-form.module';

@NgModule({
  declarations: [CourseEditComponent],
  imports: [CommonModule, CourseEditFormModule],
  bootstrap: [CourseEditComponent]
})
export class CourseEditModule {}
