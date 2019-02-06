import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/commons/services/store.service';

import { DATA_COUNT_OPTIONS } from 'src/app/commons/constants';

@Component({
  selector: 'app-data-count-switch',
  templateUrl: './data-count-switch.component.html',
  styleUrls: ['./data-count-switch.component.less']
})
export class DataCountSwitchComponent implements OnInit {
  dataCountOptions: number[];
  dataCount: number;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.dataCountOptions = DATA_COUNT_OPTIONS;
    this.dataCount = DATA_COUNT_OPTIONS[0];
  }

  onChange() {
    this.storeService.set('dataCount', this.dataCount);
  }
}
