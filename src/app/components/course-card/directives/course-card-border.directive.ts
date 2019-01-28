import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import * as moment from 'moment';

export const CLASSES = {
  fresh: 'course-card--fresh',
  futher: 'course-card--further',
  default: 'course-card--default'
};

@Directive({
  selector: '[appCourseCardBorder]'
})
export class CourseCardBorderDirective implements OnInit {
  @Input('appCourseCardBorder')
  courseDate: Date;

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    const borderClass = moment(this.courseDate).isBetween(
      moment().subtract(14, 'days'),
      moment()
    )
      ? CLASSES.fresh
      : moment(this.courseDate).isAfter(moment())
      ? CLASSES.futher
      : CLASSES.default;

    this.elem.nativeElement.classList.add(borderClass);
  }
}
