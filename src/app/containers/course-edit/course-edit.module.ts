import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseEditComponent } from './course-edit.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from 'src/app/commons/pipes/pipes.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';

@NgModule({
  declarations: [CourseEditComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule, PipesModule],
  bootstrap: [CourseEditComponent],
  providers: [CoursesService]
})
export class CourseEditModule {}
