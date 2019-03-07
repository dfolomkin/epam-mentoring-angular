import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { SetCoursesSearch } from 'src/app/components/courses-control/actions/courses-control.action';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  searchQuery: string;

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {}

  onInputKeyUp(): void {
    this.store$.dispatch(new SetCoursesSearch(this.searchQuery));
  }
}
