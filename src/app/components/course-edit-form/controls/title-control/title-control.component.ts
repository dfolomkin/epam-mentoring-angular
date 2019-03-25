import { Component, forwardRef, HostListener } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  Validators
} from '@angular/forms';

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
export class TitleControlComponent implements ControlValueAccessor {
  onChange: Function;

  onTouched: Function;

  // this init value is ignored by top level control value
  _control = new FormControl('', [
    Validators.required,
    Validators.maxLength(50)
  ]);

  get value(): string {
    return this._control.value;
  }

  set value(value: string) {
    this._control.setValue(value);
    if (this.onChange) {
      this.onChange(value);
    }
  }

  @HostListener('click') click() {
    if (this.onTouched) {
      this.onTouched();
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // this.title.valueChanges.subscribe(value => {
  //   this.title.setValidators([Validators.maxLength(50)]);
  // });

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
