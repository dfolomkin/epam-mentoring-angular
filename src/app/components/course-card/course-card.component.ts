import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less']
})
export class CourseCardComponent implements OnInit {
  @Input()
  courseData;

  constructor() {}

  ngOnInit() {}
}
