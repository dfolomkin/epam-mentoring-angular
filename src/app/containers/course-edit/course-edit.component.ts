import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CoursesService } from '../../commons/services/courses.service';
import { ICourse } from '../../commons/interfaces/course.interface';

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
      console.log(this.course);
    }
  }

  onSaveClick() {
    this.coursesService.createCourse(this.course);
    this.router.navigate(['/courses']);
    console.log('New course has been added.');
  }
}
