import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from 'src/app/commons/services/courses.service';
import { ICourse } from 'src/app/commons/interfaces/course.interface';
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
    private route: ActivatedRoute
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
    // this.createCourseSubscription.unsubscribe();
    // this.updateCourseSubscription.unsubscribe();
    // this.getCourseByIdSubscription.unsubscribe();
  }

  onSaveClick() {
    if (this.isNew) {
      this.createCourse(this.course);
    } else {
      this.updateCourse(this.course as ICourse);
    }
    this.router.navigateByUrl('/' + ROUTES_MAP.courses);
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

  updateCourse(course: ICourse) {
    this.updateCourseSubscription = this.coursesService
      .updateCourse(course)
      .subscribe(() => {
        console.log(`Course with id = ${this.course.id} has been updated.`);
      });
  }
}
