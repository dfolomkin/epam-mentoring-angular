import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseEditFormComponent } from './course-edit-form.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomPipesModule } from 'src/app/commons/pipes/custom-pipes.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';

@NgModule({
  declarations: [CourseEditFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomPipesModule
  ],
  exports: [CourseEditFormComponent],
  bootstrap: [CourseEditFormComponent],
  providers: [CoursesService]
})
export class CourseEditFormModule {}
