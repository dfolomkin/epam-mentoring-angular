import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appCourseCardBorder]'
})
export class CourseCardBorderDirective implements OnInit {
  @Input('appCourseCardBorder')
  courseDate;

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    const borderClass = moment(this.courseDate).isBetween(
      moment().subtract(14, 'days'),
      moment()
    )
      ? 'course-card--fresh'
      : moment(this.courseDate).isAfter(moment())
      ? 'course-card--further'
      : 'course-card--default';

    this.elem.nativeElement.classList.add(borderClass);
  }
}
