import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  @Input()
  item: string;

  @Output()
  clickDeleteEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onDeleteClick() {
    this.clickDeleteEvent.emit(this.item);
  }
}
