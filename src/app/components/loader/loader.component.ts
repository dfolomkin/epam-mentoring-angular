import { Component, OnInit } from '@angular/core';

import { LoaderService } from 'src/app/commons/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less']
})
export class LoaderComponent implements OnInit {
  isLoading: boolean;

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.isLoading.subscribe(
      (value: boolean): void => {
        this.isLoading = value;
      }
    );
  }
}
