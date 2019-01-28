import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { ICourse } from 'src/app/commons/interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: ICourse;

  @Output()
  clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDeleteClick() {
    this.clickEvent.emit(this.course.id);
  }
}
