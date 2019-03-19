import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { remove, isEqual } from 'lodash';

import { hasAtLeastOneItemValidator } from './validators/has-at-least-one-item.validator';

@Component({
  selector: 'app-cloud-tags-input',
  templateUrl: './cloud-tags-input.component.html',
  styleUrls: ['./cloud-tags-input.component.less']
})
export class CloudTagsInputComponent implements OnInit, OnDestroy {
  @Input()
  items: Object[];

  @Input()
  prop: string;

  @Output()
  itemsChangeEvent = new EventEmitter();

  elem: HTMLElement;
  upDownHandler: (event: KeyboardEvent) => void;
  selectedItems: Object[];
  proposedItems: Object[];
  currentProposedItemIndex: number;

  itemControl = new FormControl('');

  constructor() {}

  ngOnInit() {
    this.selectedItems = [];
    this.proposedItems = [];
    this.currentProposedItemIndex = 0;

    this.itemControl.valueChanges.subscribe(value => {
      this.itemControl.setValidators([
        hasAtLeastOneItemValidator(this.selectedItems)
      ]);
    });

    // prevent up/down keys for input
    this.preventUpDown();
  }

  preventUpDown() {
    this.elem = document.getElementsByClassName(
      'cloud-tags-input'
    )[0] as HTMLElement;
    this.upDownHandler = event => {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'Down' ||
        event.key === 'ArrowUp' ||
        event.key === 'Up'
      ) {
        event.preventDefault();
      }
    };
    this.elem.addEventListener('keyup', this.upDownHandler);
    this.elem.addEventListener('keydown', this.upDownHandler);
    this.elem.addEventListener('keypress', this.upDownHandler);
  }

  ngOnDestroy() {
    this.elem.removeEventListener('keyup', this.upDownHandler);
    this.elem.removeEventListener('keydown', this.upDownHandler);
    this.elem.removeEventListener('keypress', this.upDownHandler);
  }

  onInputKeyUp(event) {
    this.proposedItems = this.items
      .filter(
        i =>
          new RegExp(this.itemControl.value.toLowerCase()).test(
            i[this.prop].toLowerCase()
          ) && this.itemControl.value.length > 0
      )
      .slice(0, 5);

    // 'Down' is for IE/Edge
    if (event.key === 'ArrowDown' || event.key === 'Down') {
      if (this.proposedItems[this.currentProposedItemIndex + 1]) {
        ++this.currentProposedItemIndex;
      } else if (
        this.currentProposedItemIndex ===
        this.proposedItems.length - 1
      ) {
        this.currentProposedItemIndex = 0;
      }
    }

    // 'Up' is for IE/Edge
    if (event.key === 'ArrowUp' || event.key === 'Up') {
      if (this.proposedItems[this.currentProposedItemIndex - 1]) {
        --this.currentProposedItemIndex;
      } else if (this.currentProposedItemIndex === 0) {
        this.currentProposedItemIndex = this.proposedItems.length - 1;
      }
    }

    if (event.key === 'Enter') {
      const currentProposedItem = this.proposedItems[
        this.currentProposedItemIndex
      ];
      const item = this.items.find(i => isEqual(i, currentProposedItem));
      // to prevent adding the same tag
      const isUnique = !this.selectedItems.find(i =>
        isEqual(i, currentProposedItem)
      );

      if (item && isUnique) {
        this.selectedItems.push(item);
        this.itemsChangeEvent.emit(this.selectedItems);
      }

      this.itemControl.setValue('');
      this.proposedItems = [];
      this.currentProposedItemIndex = 0;
    }
  }

  onDeleteClick(item) {
    remove(this.selectedItems, i => isEqual(i, item));
    this.itemsChangeEvent.emit(this.selectedItems);
  }
}
