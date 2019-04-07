import {
  Component,
  forwardRef,
  HostListener,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl
} from '@angular/forms';
import { remove, isEqual } from 'lodash';
import { Subject, Subscription } from 'rxjs';

import { IErrorsRaiseEvent } from 'src/app/commons/interfaces/errorsRaiseEvent.interface';
import { hasAtLeastOneItemValidator } from './validators/has-at-least-one-item.validator';

@Component({
  selector: 'app-cloud-tags-input',
  templateUrl: './cloud-tags-input.component.html',
  styleUrls: ['./cloud-tags-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CloudTagsInputComponent),
      multi: true
    }
  ]
})
export class CloudTagsInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  @Input()
  itemsPool: string[];

  @Input()
  formControlName: string;

  @Output()
  errorsRaiseEvent = new EventEmitter<IErrorsRaiseEvent>();

  subscriptionsHeap: Subscription[] = [];

  onChange: Function;

  onTouched: Function;

  selectedItemsControl = new FormControl(''); // hidden
  currentItemControl = new FormControl('');

  selectedItems: string[];
  proposedItems: string[];
  currentProposedItemIndex: number;
  elem: HTMLElement;
  upDownHandler: (event: KeyboardEvent) => void;

  ngOnInit() {
    this.selectedItems = [];
    this.proposedItems = [];
    this.currentProposedItemIndex = 0;

    this.subscriptionsHeap.push(
      this.selectedItemsControl.valueChanges.subscribe(value => {
        if (this.onChange) {
          this.onChange(value);
        }
        if (this.selectedItemsControl.errors) {
          this.errorsRaiseEvent.emit({
            formControlName: this.formControlName,
            errors: this.selectedItemsControl.errors
          });
        }
      })
    );

    // prevent up/down keys for input
    this.preventUpDown();
  }

  ngOnDestroy() {
    this.elem.removeEventListener('keyup', this.upDownHandler);
    this.elem.removeEventListener('keydown', this.upDownHandler);
    this.elem.removeEventListener('keypress', this.upDownHandler);

    for (const subscription of this.subscriptionsHeap) {
      subscription.unsubscribe();
    }
  }

  @HostListener('click') click() {
    if (this.onTouched) {
      this.onTouched();
    }
    this.selectedItemsControl.setValidators([
      hasAtLeastOneItemValidator(this.selectedItems)
    ]);
    this.selectedItemsControl.updateValueAndValidity();
  }

  writeValue(value: any): void {
    this.selectedItemsControl.setValue(value);
    if (value.length > 0) {
      this.selectedItems = value.split(', ');
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
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

  onInputKeyUp(event) {
    this.proposedItems = this.itemsPool
      .filter(
        i =>
          new RegExp(this.currentItemControl.value.toLowerCase()).test(
            i.toLowerCase()
          ) && this.currentItemControl.value.length > 0
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
      const item = this.itemsPool.find(i => isEqual(i, currentProposedItem));

      // to prevent adding the same tag
      const isUnique = !this.selectedItems.find(i =>
        isEqual(i, currentProposedItem)
      );

      if (item && isUnique) {
        this.selectedItems.push(item);
        this.selectedItemsControl.setValue(this.selectedItems.join(', '));
      }

      this.currentItemControl.setValue('');
      this.proposedItems = [];
      this.currentProposedItemIndex = 0;
    }
  }

  onTagDeleteClick(item) {
    remove(this.selectedItems, i => i === item);
    this.selectedItemsControl.setValue(this.selectedItems.join(', '));
  }
}
