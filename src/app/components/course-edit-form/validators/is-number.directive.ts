import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { isNumberValidator } from './is-number.validator';

@Directive({
  selector: '[appIsNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IsNumberValidatorDirective,
      multi: true
    }
  ]
})
export class IsNumberValidatorDirective implements Validator {
  @Input('appIsNumber') isNumberValidator: string;

  validate = isNumberValidator;
}
