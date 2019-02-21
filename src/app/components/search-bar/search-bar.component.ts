import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/commons/services/store.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  searchQuery: string;

  constructor(private storeService: StoreService) {}

  ngOnInit() {}

  onInputKeyUp(event: KeyboardEvent): void {
    if (!(this.searchQuery.length % 3)) {
      this.storeService.set('searchQuery', event);
    }
  }
}
