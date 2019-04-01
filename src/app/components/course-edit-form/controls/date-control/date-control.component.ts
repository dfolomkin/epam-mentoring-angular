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

import { hasCorrectDateFormatValidator } from './validators/has-correct-date-format.validator';
import { IErrorsRaiseEvent } from 'src/app/commons/interfaces/errorsRaiseEvent.interface';

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateControlComponent),
      multi: true
    }
  ]
})
export class DateControlComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  subscription: Subscription;

  onChange: Function;

  onTouched: Function;

  date = new FormControl('');

  @Output()
  errorsRaiseEvent = new EventEmitter<IErrorsRaiseEvent>();

  ngOnInit() {
    this.subscription = this.date.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
      if (this.date.errors) {
        this.errorsRaiseEvent.emit({
          formControlName: 'date',
          errors: this.date.errors
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
    this.date.setValidators([
      Validators.required,
      hasCorrectDateFormatValidator(/^\d{2}\/\d{2}\/\d{4}$/)
    ]);
    this.date.updateValueAndValidity();
  }

  writeValue(value: any): void {
    this.date.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
