import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  searchString: string;

  constructor() {}

  ngOnInit() {
    this.searchString = 'Initial search string from VM';
  }

  onSearchClick() {
    console.log('Searching text: ', this.searchString);
  }
}
