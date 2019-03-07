import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import {
  SetCoursesChunkSize,
  SetCoursesCount
} from 'src/app/components/courses-control/actions/courses-control.action';
import {
  DataChunkSize,
  dataChunkSizes
} from 'src/app/components/courses-control/interfaces/courses-control.interface';

@Component({
  selector: 'app-data-count-switch',
  templateUrl: './data-count-switch.component.html',
  styleUrls: ['./data-count-switch.component.less']
})
export class DataCountSwitchComponent implements OnInit {
  dataCount: DataChunkSize;
  dataCountOptions: DataChunkSize[];

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.dataCount = DataChunkSize.chunk30;
    this.dataCountOptions = dataChunkSizes;
  }

  onChange(): void {
    this.store$.dispatch(new SetCoursesChunkSize(this.dataCount));
    this.store$.dispatch(new SetCoursesCount(this.dataCount));
  }
}
