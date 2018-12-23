import { Component, OnInit } from '@angular/core';
import { coursesMock, ICourse } from '../commons/constants';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {
  courses: ICourse[] = coursesMock;

  constructor() {}

  ngOnInit() {}
}
