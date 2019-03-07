import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'src/app/app.state';
import { DataChunkSize } from 'src/app/components/courses-control/interfaces/courses-control.interface';
import {
  getDataChunkSize,
  getDataCount
} from 'src/app/components/courses-control/selectors/courses-control.selector';
import { SetCoursesCount } from 'src/app/components/courses-control/actions/courses-control.action';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.less']
})
export class LoadMoreButtonComponent implements OnInit, OnDestroy {
  dataChunkSize: DataChunkSize;
  dataCount: number;

  subscriptionsHeap: Subscription[];

  constructor(private store$: Store<IAppState>) {}

  ngOnInit() {
    this.subscriptionsHeap = [];
    this.subscriptionsHeap.push(
      this.store$
        .pipe(select(getDataChunkSize))
        .subscribe((chunk: DataChunkSize) => {
          this.dataChunkSize = chunk;
        })
    );
    this.subscriptionsHeap.push(
      this.store$.pipe(select(getDataCount)).subscribe((count: number) => {
        this.dataCount = count;
      })
    );
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptionsHeap) {
      subscription.unsubscribe();
    }
  }

  onClick(): void {
    this.store$.dispatch(
      new SetCoursesCount(this.dataCount + this.dataChunkSize)
    );
  }
}
