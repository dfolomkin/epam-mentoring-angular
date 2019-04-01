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
  selector: 'app-description-control',
  templateUrl: './description-control.component.html',
  styleUrls: ['./description-control.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DescriptionControlComponent),
      multi: true
    }
  ]
})
export class DescriptionControlComponent
  implements ControlValueAccessor, OnInit, OnDestroy {
  subscription: Subscription;

  onChange: Function;

  onTouched: Function;

  description = new FormControl('');

  @Output()
  errorsRaiseEvent = new EventEmitter<IErrorsRaiseEvent>();

  ngOnInit() {
    this.subscription = this.description.valueChanges.subscribe(value => {
      if (this.onChange) {
        this.onChange(value);
      }
      if (this.description.errors) {
        this.errorsRaiseEvent.emit({
          formControlName: 'description',
          errors: this.description.errors
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
    this.description.setValidators([
      Validators.required,
      Validators.maxLength(500)
    ]);
    this.description.updateValueAndValidity();
  }

  writeValue(value: any): void {
    this.description.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
