import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';
import {
  GetCourses,
  DeleteCourse
} from 'src/app/components/courses/actions/courses.action';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { StoreService } from 'src/app/commons/services/store.service';
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
  coursesPrev: ICourse[];
  courses$: Observable<ICourse[]>;
  filterQuery: string;
  searchQuery: string;
  dataCount: number;
  dataCountInc: number;

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
    private storeService: StoreService,
    private store$: Store<IAppState>
  ) {}

  ngOnInit() {
    this.dataCount = DATA_COUNT_OPTIONS[0];
    this.dataCountInc = DATA_COUNT_OPTIONS[0];

    this.filterServiceSubscription = this.storeService.sources.filterQuery.subscribe(
      (query: string): void => {
        this.filterQuery = query;
      }
    );
    this.searchServiceSubscription = this.storeService.sources.searchQuery
      .pipe(
        map(event => (event.target as HTMLInputElement).value),
        debounceTime(1000)
      )
      .subscribe(
        (query: string): void => {
          this.searchQuery = query;
          this.getCoursesByParams();
        }
      );
    this.dataCountSubscription = this.storeService.sources.dataCount.subscribe(
      (count: number): void => {
        this.dataCount = count;
        this.dataCountInc = count;
        this.getCoursesByParams();
      }
    );
    this.loadMoreSubscription = this.storeService.sources.loadMore.subscribe(
      (): void => {
        this.dataCount += this.dataCountInc;
        this.getCoursesByParams();
      }
    );

    this.courses$ = this.store$.pipe(select('courses'));
    this.store$.dispatch(new GetCourses());
    // this.getCourses();
  }

  ngOnDestroy() {
    this.filterServiceSubscription.unsubscribe();
    this.searchServiceSubscription.unsubscribe();
    this.dataCountSubscription.unsubscribe();
    this.loadMoreSubscription.unsubscribe();
    // this.getCoursesSubscription.unsubscribe();
    if (this.getCoursesByParamsSubscription) {
      this.getCoursesByParamsSubscription.unsubscribe();
    }
    if (this.deleteCourseSubscription) {
      this.deleteCourseSubscription.unsubscribe();
    }
  }

  onChildDelete(id: number) {
    if (confirm(`Do you really want to delete this course with id = ${id}?`)) {
      // this.deleteCourseSubscription = this.coursesService
      //   .deleteCourse(id)
      //   .subscribe(() => {
      //     console.log(`Course with id = ${id} has been deleted.`);
      //   });
      this.store$.dispatch(new DeleteCourse(id));
    }
  }

  getCourses() {
    this.getCoursesSubscription = this.coursesService.getCourses().subscribe(
      (data: ICourse[]): void => {
        this.coursesPrev = data;
      }
    );
  }

  getCoursesByParams() {
    this.getCoursesByParamsSubscription = this.coursesService
      .getCoursesByParams(this.searchQuery, 0, this.dataCount)
      .subscribe(
        (data: ICourse[]): void => {
          this.coursesPrev = data;
        }
      );
  }
}
