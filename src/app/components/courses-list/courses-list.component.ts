import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';
import { DataChunkSize } from 'src/app/components/courses-control/interfaces/courses-control.interface';
import {
  getCoursesList,
  getCoursesServerCount
} from 'src/app/components/courses/selectors/courses.selector';
import {
  getFilterQuery,
  getSearchQuery,
  getDataChunkSize,
  getDataCount
} from 'src/app/components/courses-control/selectors/courses-control.selector';
import {
  GetCourses,
  GetCoursesByParams,
  DeleteCourse
} from 'src/app/components/courses/actions/courses.action';
import { SetCoursesCount } from 'src/app/components/courses-control/actions/courses-control.action';
import { NO_DATA_PLACEHOLDER } from 'src/app/commons/constants';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses$: Observable<ICourse[]>;
  coursesServerCount$: Observable<number>;
  filterQuery$: Observable<string>;
  searchQuery$: Observable<string>;
  dataCount$: Observable<number>;

  subscriptionsHeap: Subscription[] = [];

  noDataPlaceholder = NO_DATA_PLACEHOLDER;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.courses$ = this.store$.pipe(select(getCoursesList));
    this.coursesServerCount$ = this.store$.pipe(select(getCoursesServerCount));
    this.filterQuery$ = this.store$.pipe(select(getFilterQuery));
    this.searchQuery$ = this.store$.pipe(
      select(getSearchQuery),
      debounceTime(1000)
    );
    this.dataCount$ = this.store$.pipe(select(getDataCount));

    this.subscriptionsHeap.push(
      this.store$
        .pipe(select(getDataChunkSize))
        .subscribe((chunk: DataChunkSize) => {
          this.store$.dispatch(new SetCoursesCount(chunk));
        })
    );
    this.subscriptionsHeap.push(
      combineLatest(this.searchQuery$, this.dataCount$).subscribe(
        ([searchQuery, dataCount]) => {
          this.store$.dispatch(
            new GetCoursesByParams({
              searchQuery,
              startFrom: 0,
              dataCount
            })
          );
        }
      )
    );

    this.store$.dispatch(new GetCourses());
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptionsHeap) {
      subscription.unsubscribe();
    }
  }

  onChildDelete(id: number): void {
    if (confirm(`Do you really want to delete this course with id = ${id}?`)) {
      this.store$.dispatch(new DeleteCourse(id));
    }
  }
}
