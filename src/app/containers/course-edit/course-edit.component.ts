import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';
import {
  CreateCourse,
  UpdateCourse
} from 'src/app/components/courses/actions/courses.action';
import { CoursesService } from 'src/app/components/courses/services/courses.service';
import { ROUTES_MAP } from 'src/app/commons/constants';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.less']
})
export class CourseEditComponent implements OnInit, OnDestroy {
  isNew: boolean;

  getCourseByIdSubscription: Subscription;

  courseForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl(''),
    description: new FormControl(''),
    author: new FormControl(''),
    date: new FormControl(new Date()),
    duration: new FormControl(0)
  });

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private store$: Store<IAppState>
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!isNaN(+id)) {
      this.getCourseById(+id);
    } else if (id === ROUTES_MAP.newId) {
      this.isNew = true;
    }
  }

  ngOnDestroy() {
    if (this.getCourseByIdSubscription) {
      this.getCourseByIdSubscription.unsubscribe();
    }
  }

  onSaveClick(): void {
    if (this.isNew) {
      this.store$.dispatch(new CreateCourse(this.courseForm.value));
    } else {
      this.store$.dispatch(new UpdateCourse(this.courseForm.value));
    }
  }

  getCourseById(id: number): void {
    this.getCourseByIdSubscription = this.coursesService
      .getCourseById(id)
      .subscribe(
        (data: ICourse): void => {
          this.courseForm.patchValue(data);
        }
      );
  }
}
