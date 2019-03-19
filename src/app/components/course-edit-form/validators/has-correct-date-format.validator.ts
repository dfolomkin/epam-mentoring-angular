import { ValidatorFn, AbstractControl } from '@angular/forms';

export const hasCorrectDateFormatValidator = (format: RegExp): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const incorrect = !format.test(control.value);

    return incorrect ? { incorrectDateFormat: { value: control.value } } : null;
  };
};
