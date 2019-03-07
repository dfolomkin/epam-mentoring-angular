import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { ICourse } from 'src/app/components/courses/interfaces/courses.interface';
import { getAuthLogin } from 'src/app/components/auth/selectors/auth.selector';

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

  // TODO: it can brake onPush
  login$: Observable<string>;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.login$ = this.store$.pipe(select(getAuthLogin));
  }

  onDeleteClick(): void {
    this.clickEvent.emit(this.course.id);
  }
}
