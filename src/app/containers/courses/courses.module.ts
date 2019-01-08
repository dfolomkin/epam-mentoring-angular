import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';

import { ControlBarModule } from '../../components/control-bar/control-bar.module';
import { CoursesListModule } from '../../components/courses-list/courses-list.module';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, ControlBarModule, CoursesListModule],
  bootstrap: [CoursesComponent]
})
export class CoursesModule {}
