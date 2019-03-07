import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

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
  course: Partial<ICourse>;
  isNew: boolean;
  createCourseSubscription: Subscription;
  updateCourseSubscription: Subscription;
  getCourseByIdSubscription: Subscription;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<IAppState>
  ) {}

  ngOnInit() {
    this.course = {
      title: '',
      description: '',
      date: new Date(),
      duration: 0,
      author: ''
    };

    const id = this.route.snapshot.paramMap.get('id');

    if (!isNaN(+id)) {
      this.getCourseById(+id);
    } else if (id === ROUTES_MAP.newId) {
      this.isNew = true;
    }
  }

  ngOnDestroy() {
    if (this.createCourseSubscription) {
      this.createCourseSubscription.unsubscribe();
    }
    if (this.updateCourseSubscription) {
      this.updateCourseSubscription.unsubscribe();
    }
    if (this.getCourseByIdSubscription) {
      this.getCourseByIdSubscription.unsubscribe();
    }
  }

  onSaveClick() {
    if (this.isNew) {
      // this.createCourse(this.course);
      this.store$.dispatch(new CreateCourse(this.course));
    } else {
      // this.updateCourse(this.course);
      this.store$.dispatch(new UpdateCourse(this.course));
    }
    // this.router.navigateByUrl('/' + ROUTES_MAP.courses);
  }

  getCourseById(id: number) {
    this.getCourseByIdSubscription = this.coursesService
      .getCourseById(id)
      .subscribe(
        (data: ICourse): void => {
          this.course = data;
        }
      );
  }

  createCourse(course: Partial<ICourse>) {
    this.createCourseSubscription = this.coursesService
      .createCourse(course)
      .subscribe(() => {
        console.log('New course has been added.');
      });
  }

  updateCourse(course: Partial<ICourse>) {
    this.updateCourseSubscription = this.coursesService
      .updateCourse(course)
      .subscribe(() => {
        console.log(`Course with id = ${this.course.id} has been updated.`);
      });
  }
}
