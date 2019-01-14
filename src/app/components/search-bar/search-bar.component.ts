import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/commons/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {
  private searchString: string;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  onSearchClick() {
    this.searchService.setSearchQuery(this.searchString);
  }

  onInputKeyUp() {
    this.searchService.setSearchQuery(this.searchString);
  }
}
