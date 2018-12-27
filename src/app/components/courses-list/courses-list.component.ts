import { Component, OnInit, OnChanges } from '@angular/core';
import { coursesMock, ICourse } from '../commons/constants';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit, OnChanges {
  courses: ICourse[] = coursesMock;

  constructor() {
    // this.onClick.bind(this);
  }

  ngOnInit() {
    console.log('OnInit has fired!');
  }

  ngOnChanges() {
    console.log('OnChanges has fired!');
  }

  handleChildDelete(id: number) {
    this.courses = this.courses.filter(item => item.id !== id);
    console.log(`Course with id ${id} has been removed`);
  }
}
