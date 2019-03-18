import { AbstractControl } from '@angular/forms';

export const isNumberValidator = (
  control: AbstractControl
): { [key: string]: any } | null => {
  console.log(isNaN(+control.value));
  return isNaN(+control.value) ? { NaN: { value: control.value } } : null;
};
