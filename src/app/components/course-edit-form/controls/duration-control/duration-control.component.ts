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

import { isNumberValidator } from './validators/is-number.validator';
import { IErrorsRaiseEvent } from 'src/app/commons/interfaces/errorsRaiseEvent.interface';

@Component({
  selector: 'app-duration-control',
  templateUrl: './duration-control.component.html',
  styleUrls: ['./duration-control.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationControlComponent),
      multi: true
    }
  ]
})
export class DurationControlComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  subscription: Subscription;

  onChange: Function;

  onTouched: Function;

  duration = new FormControl('');

  @Output()
  errorsRaiseEvent = new EventEmitter<IErrorsRaiseEvent>();

  ngOnInit() {
    this.subscription = this.duration.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
      if (this.duration.errors) {
        this.errorsRaiseEvent.emit({
          formControlName: 'duration',
          errors: this.duration.errors
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
    this.duration.setValidators([Validators.required, isNumberValidator]);
    this.duration.updateValueAndValidity();
  }

  writeValue(value: any): void {
    this.duration.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
