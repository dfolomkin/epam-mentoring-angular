import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StoreService {
  sourses = {
    filterQuery: new Subject<string>(),
    searchQuery: new Subject<string>(),
    dataCount: new Subject<number>(),
    loadMore: new Subject()
  };

  constructor() {}

  set(sourse: string, value?: any) {
    this.sourses[sourse].next(value);
  }
}
