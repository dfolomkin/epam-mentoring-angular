import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class FilterService {
  filterQuerySourse = new Subject<string>();

  constructor() {}

  setFilterQuery(query: string) {
    this.filterQuerySourse.next(query);
  }
}
