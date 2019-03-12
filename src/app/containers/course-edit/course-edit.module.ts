import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseEditComponent } from './course-edit.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomPipesModule } from 'src/app/commons/pipes/custom-pipes.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';

@NgModule({
  declarations: [CourseEditComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomPipesModule
  ],
  bootstrap: [CourseEditComponent],
  providers: [CoursesService]
})
export class CourseEditModule {}
