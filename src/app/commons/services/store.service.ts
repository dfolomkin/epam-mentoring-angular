import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class StoreService {
  sources = {
    filterQuery: new Subject<string>(),
    searchQuery: new Subject<KeyboardEvent>(),
    dataCount: new Subject<number>(),
    loadMore: new Subject()
  };

  constructor() {}

  set(source: string, value?: any) {
    this.sources[source].next(value);
  }
}
