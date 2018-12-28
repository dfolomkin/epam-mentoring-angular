import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  searchString: string;

  constructor() {}

  ngOnInit() {
    this.searchString = 'Initial search string from VM';
  }

  onSearchClick() {
    console.log('Searching text: ', this.searchString);
  }
}
