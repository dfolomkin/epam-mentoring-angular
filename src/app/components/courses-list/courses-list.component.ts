import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CoursesService } from 'src/app/commons/services/courses.service';
import { SearchService } from 'src/app/commons/services/search.service';
import { ICourse } from 'src/app/commons/interfaces/course.interface';

export const NO_DATA_PLACEHOLDER = 'No data. Feel free to add new course.';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit, OnChanges, OnDestroy {
  courses: ICourse[];
  noDataPlaceholder = NO_DATA_PLACEHOLDER;
  searchQuery: string;
  searchServiceSubscription: Subscription;
  getCourseSubscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private searchService: SearchService
  ) {
    this.searchQuery = '';
    this.searchServiceSubscription = searchService.searchQuerySourse.subscribe(
      query => {
        this.searchQuery = query;
      }
    );
  }

  ngOnInit() {
    this.getCourseSubscription = this.coursesService
      .getCourses()
      .subscribe((data: ICourse[]) => (this.courses = data));
  }

  ngOnChanges() {}

  ngOnDestroy() {
    this.searchServiceSubscription.unsubscribe();
    this.getCourseSubscription.unsubscribe();
  }

  onChildDelete(id: number) {
    if (confirm('Do you really want to delete this course?')) {
      this.courses = this.coursesService.deleteCourse(id);
    }
  }
}
