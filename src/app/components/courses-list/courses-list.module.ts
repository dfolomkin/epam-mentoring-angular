import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { CoursesListService } from './courses-list.service';
import { FilterPipe } from './pipes/filter.pipe';

import { CourseCardModule } from '../course-card/course-card.module';
import { OrderByDatePipe } from '../../commons/pipes/order-by-date.pipe';
import { SearchService } from '../../commons/services/search.service';

@NgModule({
  declarations: [CoursesListComponent, FilterPipe, OrderByDatePipe],
  imports: [CommonModule, CourseCardModule],
  exports: [CoursesListComponent],
  bootstrap: [CoursesListComponent],
  providers: [CoursesListService, SearchService]
})
export class CoursesListModule {}
