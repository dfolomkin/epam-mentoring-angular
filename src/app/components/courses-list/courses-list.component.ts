import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CoursesService } from '../../commons/services/courses.service';

import { SearchService } from '../../commons/services/search.service';
import { ICourse } from '../../commons/interfaces/course.interface';

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
  subscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private searchService: SearchService
  ) {
    this.searchQuery = '';
    this.subscription = searchService.searchQuerySourse.subscribe(query => {
      this.searchQuery = query;
    });
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  ngOnChanges() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChildDelete(id: number) {
    if (confirm('Do you really want to delete this course?')) {
      this.courses = this.coursesService.deleteCourse(id);
    }
  }
}
