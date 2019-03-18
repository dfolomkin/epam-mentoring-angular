import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
import { isNumberValidator } from './validators/is-number.validator';
import { hasCorrectDateFormat } from './validators/has-correct-date-format.validator';

@Component({
  selector: 'app-course-edit-form',
  templateUrl: './course-edit-form.component.html',
  styleUrls: ['./course-edit-form.component.less']
})
export class CourseEditFormComponent implements OnInit, OnDestroy {
  isNew: boolean;

  getCourseByIdSubscription: Subscription;

  private nowDate = new Date().toLocaleDateString('ru-RU').replace(/\./g, '/');

  courseForm = new FormGroup({
    id: new FormControl(0),
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(500)
    ]),
    author: new FormControl('', [Validators.required]),
    date: new FormControl(this.nowDate, [
      Validators.required,
      hasCorrectDateFormat(/^\d{2}\/\d{2}\/\d{4}$/)
    ]),
    duration: new FormControl(0, [Validators.required, isNumberValidator])
  });

  get duration() {
    return this.courseForm.get('duration');
  }

  get date() {
    return this.courseForm.get('date');
  }

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
