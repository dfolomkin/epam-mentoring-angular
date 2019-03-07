import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesListComponent } from './courses-list.component';
import { FilterPipe } from './pipes/filter.pipe';

import { CourseCardModule } from 'src/app/components/course-card/course-card.module';
import { LoadMoreButtonModule } from 'src/app/components/load-more-button/load-more-button.module';
import { CustomPipesModule } from 'src/app/commons/pipes/custom-pipes.module';
import { CoursesService } from 'src/app/components/courses/services/courses.service';

@NgModule({
  declarations: [CoursesListComponent, FilterPipe],
  imports: [
    CommonModule,
    CourseCardModule,
    LoadMoreButtonModule,
    CustomPipesModule
  ],
  exports: [CoursesListComponent],
  bootstrap: [CoursesListComponent],
  providers: [CoursesService]
})
export class CoursesListModule {}
