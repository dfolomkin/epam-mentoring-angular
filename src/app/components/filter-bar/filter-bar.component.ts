import { Component, OnInit } from '@angular/core';

import { FilterService } from 'src/app/commons/services/filter.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.less']
})
export class FilterBarComponent implements OnInit {
  filterQuery: string;

  constructor(private filterService: FilterService) {}

  ngOnInit() {}

  onInputKeyUp() {
    this.filterService.setFilterQuery(this.filterQuery);
  }
}
