import { ValidatorFn, AbstractControl } from '@angular/forms';

export const hasCorrectDateFormat = (format: RegExp): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = !format.test(control.value);
    return forbidden ? { forbiddenDateFormat: { value: control.value } } : null;
  };
};
