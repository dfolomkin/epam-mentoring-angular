import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CourseEditFormComponent } from './course-edit-form.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { CustomPipesModule } from 'src/app/commons/pipes/custom-pipes.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { AuthorsService } from 'src/app/commons/services/authors.service';
import { IsNumberValidatorDirective } from './validators/is-number.directive';
import { CloudTagsInputModule } from 'src/app/components/cloud-tags-input/cloud-tags-input.module';
import { ControlsModule } from './controls/controls.module';

@NgModule({
  declarations: [CourseEditFormComponent, IsNumberValidatorDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CustomPipesModule,
    CloudTagsInputModule,
    ControlsModule
  ],
  exports: [CourseEditFormComponent],
  bootstrap: [CourseEditFormComponent],
  providers: [CoursesService, AuthorsService]
})
export class CourseEditFormModule {}
