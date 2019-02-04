import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesService } from 'src/app/commons/services/courses.service';
import { ICourse } from 'src/app/commons/interfaces/course.interface';
import { ROUTES_MAP } from 'src/app/commons/constants';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.less']
})
export class CourseEditComponent implements OnInit {
  course: ICourse;

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    if (id !== undefined) {
      this.course = this.coursesService.getCourseById(id) as ICourse;
    }
  }

  onSaveClick() {
    const path = this.route.snapshot.routeConfig.path;
    const isNew = path.indexOf(ROUTES_MAP.addNew) !== -1;

    if (isNew) {
      this.coursesService.createCourse(this.course);
      console.log('New course has been added.');
    } else {
      this.coursesService.updateCourse(this.course.id, this.course);
      console.log(`Course with id = ${this.course.id} has been updated.`);
    }
    this.router.navigateByUrl('/' + ROUTES_MAP.courses);
  }
}
