import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ICourse } from '../../commons/constants';
import { CoursesListService } from './courses-list.service';

import { SearchService } from '../../commons/services/search.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit, OnChanges, OnDestroy {
  courses: ICourse[];
  noDataPlaceholder = 'No data. Feel free to add new course.';
  searchQuery: string;
  subscription: Subscription;

  constructor(
    private coursesService: CoursesListService,
    private searchService: SearchService
  ) {
    this.searchQuery = '';
    this.subscription = searchService.searchQuerySourse.subscribe(query => {
      this.searchQuery = query;
    });
  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
    console.log('OnInit has fired!');
  }

  ngOnChanges() {
    console.log('OnChanges has fired!');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChildDelete(id: number) {
    this.courses = this.courses.filter(item => item.id !== id);
    console.log(`Course with id ${id} has been removed`);
  }
}
