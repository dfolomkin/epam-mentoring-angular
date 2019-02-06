import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { FilterPipe } from './pipes/filter.pipe';

import { CourseCardModule } from 'src/app/components/course-card/course-card.module';
import { LoadMoreButtonModule } from 'src/app/components/load-more-button/load-more-button.module';
import { OrderByDatePipe } from 'src/app/commons/pipes/order-by-date.pipe';
import { CoursesService } from 'src/app/commons/services/courses.service';
import { StoreService } from 'src/app/commons/services/store.service';

@NgModule({
  declarations: [CoursesListComponent, FilterPipe, OrderByDatePipe],
  imports: [CommonModule, CourseCardModule, LoadMoreButtonModule],
  exports: [CoursesListComponent],
  bootstrap: [CoursesListComponent],
  providers: [CoursesService, StoreService]
})
export class CoursesListModule {}
