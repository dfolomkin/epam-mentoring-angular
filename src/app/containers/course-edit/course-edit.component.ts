import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../../commons/services/courses.service';
import { ICourse } from '../../commons/interfaces/course.interface';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.less']
})
export class CourseEditComponent implements OnInit {
  course: ICourse;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.course = {
      title: ''
    } as ICourse;
  }
}
