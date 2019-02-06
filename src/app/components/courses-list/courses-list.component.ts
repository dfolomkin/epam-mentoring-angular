import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CoursesService } from 'src/app/commons/services/courses.service';
import { StoreService } from 'src/app/commons/services/store.service';
import { ICourse } from 'src/app/commons/interfaces/course.interface';
import {
  NO_DATA_PLACEHOLDER,
  DATA_COUNT_OPTIONS
} from 'src/app/commons/constants';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses: ICourse[];
  filterQuery: string;
  searchQuery: string;
  dataCount: number;

  filterServiceSubscription: Subscription;
  searchServiceSubscription: Subscription;
  dataCountSubscription: Subscription;
  loadMoreSubscription: Subscription;

  getCoursesSubscription: Subscription;
  getCoursesByParamsSubscription: Subscription;
  deleteCourseSubscription: Subscription;

  noDataPlaceholder = NO_DATA_PLACEHOLDER;

  constructor(
    private coursesService: CoursesService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.dataCount = DATA_COUNT_OPTIONS[0];

    this.filterServiceSubscription = this.storeService.sourses.filterQuery.subscribe(
      (query: string): void => {
        this.filterQuery = query;
      }
    );
    this.searchServiceSubscription = this.storeService.sourses.searchQuery.subscribe(
      (query: string): void => {
        this.searchQuery = query;
        this.getCoursesByParams();
      }
    );
    this.dataCountSubscription = this.storeService.sourses.dataCount.subscribe(
      (count: number): void => {
        this.dataCount = count;
      }
    );
    this.loadMoreSubscription = this.storeService.sourses.loadMore.subscribe(
      (): void => {
        this.dataCount += this.dataCount;
        this.getCoursesByParams();
      }
    );

    this.getCourses();
  }

  ngOnDestroy() {
    // this.filterServiceSubscription.unsubscribe();
    // this.searchServiceSubscription.unsubscribe();
    // this.dataCountSubscription.unsubscribe();
    // this.loadMoreSubscription.unsubscribe();
    // this.getCoursesSubscription.unsubscribe();
    // this.getCoursesByParamsSubscription.unsubscribe();
    // this.deleteCourseSubscription.unsubscribe();
  }

  onChildDelete(id: number) {
    if (confirm('Do you really want to delete this course?')) {
      this.deleteCourseSubscription = this.coursesService
        .deleteCourse(id)
        .subscribe(() => {
          console.log(`Course with id = ${id} has been deleted.`);
        });
    }
  }

  getCourses() {
    this.getCoursesSubscription = this.coursesService.getCourses().subscribe(
      (data: ICourse[]): void => {
        this.courses = data;
      }
    );
  }

  getCoursesByParams() {
    this.getCoursesByParamsSubscription = this.coursesService
      .getCoursesByParams(this.searchQuery, 0, this.dataCount)
      .subscribe(
        (data: ICourse[]): void => {
          this.courses = data;
        }
      );
  }
}
