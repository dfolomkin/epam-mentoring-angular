import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { SetCoursesFilter } from 'src/app/components/courses-control/actions/courses-control.action';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.less']
})
export class FilterBarComponent implements OnInit {
  filterQuery: string;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {}

  onInputKeyUp(): void {
    this.store$.dispatch(new SetCoursesFilter(this.filterQuery));
  }
}
