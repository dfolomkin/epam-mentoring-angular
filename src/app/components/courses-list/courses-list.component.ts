import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CoursesService } from 'src/app/commons/services/courses.service';
import { FilterService } from 'src/app/commons/services/filter.service';
import { ICourse } from 'src/app/commons/interfaces/course.interface';
import { NO_DATA_PLACEHOLDER } from 'src/app/commons/constants';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses: ICourse[];
  filterQuery: string;
  filterServiceSubscription: Subscription;
  getCourseSubscription: Subscription;

  noDataPlaceholder = NO_DATA_PLACEHOLDER;

  constructor(
    private coursesService: CoursesService,
    private filterService: FilterService
  ) {
    this.filterQuery = '';
    this.filterServiceSubscription = filterService.filterQuerySourse.subscribe(
      query => {
        this.filterQuery = query;
      }
    );
  }

  ngOnInit() {
    this.getCourseSubscription = this.coursesService
      .getCourses()
      .subscribe((data: ICourse[]) => (this.courses = data));
  }

  ngOnDestroy() {
    this.filterServiceSubscription.unsubscribe();
    this.getCourseSubscription.unsubscribe();
  }

  onChildDelete(id: number) {
    if (confirm('Do you really want to delete this course?')) {
      this.courses = this.coursesService.deleteCourse(id);
    }
  }
}
