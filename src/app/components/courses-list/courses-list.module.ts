import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { CoursesListService } from './courses-list.service';
import { CoursesFilterPipe } from './courses-list.pipe';

import { CourseCardModule } from '../course-card/course-card.module';

@NgModule({
  declarations: [CoursesListComponent, CoursesFilterPipe],
  imports: [CommonModule, CourseCardModule],
  exports: [CoursesListComponent],
  bootstrap: [CoursesListComponent],
  providers: [CoursesListService]
})
export class CoursesListModule {}
