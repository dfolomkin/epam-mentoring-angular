import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

import { ControlBarModule } from 'src/app/components/control-bar/control-bar.module';
import { CoursesListModule } from 'src/app/components/courses-list/courses-list.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, ControlBarModule, CoursesListModule],
  bootstrap: [CoursesComponent]
})
export class CoursesModule {}
