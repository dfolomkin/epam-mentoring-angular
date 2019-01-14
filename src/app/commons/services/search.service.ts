import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SearchService {
  searchQuerySourse = new Subject<string>();

  constructor() {}

  setSearchQuery(query: string) {
    this.searchQuerySourse.next(query);
  }
}
