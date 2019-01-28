import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { FilterPipe } from './pipes/filter.pipe';

import { OrderByDatePipe } from 'src/app/commons/pipes/order-by-date.pipe';
import { CourseCardModule } from 'src/app/components/course-card/course-card.module';
import { CoursesService } from 'src/app/commons/services/courses.service';
import { SearchService } from 'src/app/commons/services/search.service';

@NgModule({
  declarations: [CoursesListComponent, FilterPipe, OrderByDatePipe],
  imports: [CommonModule, CourseCardModule],
  exports: [CoursesListComponent],
  bootstrap: [CoursesListComponent],
  providers: [CoursesService, SearchService]
})
export class CoursesListModule {}
