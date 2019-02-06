import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/commons/services/store.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.less']
})
export class FilterBarComponent implements OnInit {
  filterQuery: string;

  constructor(private storeService: StoreService) {}

  ngOnInit() {}

  onInputKeyUp() {
    this.storeService.set('filterQuery', this.filterQuery);
  }
}
