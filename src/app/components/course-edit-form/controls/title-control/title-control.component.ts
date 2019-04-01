import {
  Component,
  forwardRef,
  HostListener,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { IErrorsRaiseEvent } from 'src/app/commons/interfaces/errorsRaiseEvent.interface';

@Component({
  selector: 'app-title-control',
  templateUrl: './title-control.component.html',
  styleUrls: ['./title-control.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TitleControlComponent),
      multi: true
    }
  ]
})
export class TitleControlComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  subscription: Subscription;

  onChange: Function;

  onTouched: Function;

  title = new FormControl('');

  @Output()
  errorsRaiseEvent = new EventEmitter<IErrorsRaiseEvent>();

  ngOnInit() {
    this.subscription = this.title.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
      if (this.title.errors) {
        this.errorsRaiseEvent.emit({
          formControlName: 'title',
          errors: this.title.errors
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click') click() {
    if (this.onTouched) {
      this.onTouched();
    }
    this.title.setValidators([Validators.required, Validators.maxLength(50)]);
    this.title.updateValueAndValidity();
  }

  writeValue(value: any): void {
    this.title.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
