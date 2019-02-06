import { Component, OnInit } from '@angular/core';

import { StoreService } from 'src/app/commons/services/store.service';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.less']
})
export class LoadMoreButtonComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  ngOnInit() {}

  onClick() {
    this.storeService.set('loadMore');
  }
}
