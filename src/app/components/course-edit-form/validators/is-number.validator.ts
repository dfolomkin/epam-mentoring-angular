import { AbstractControl } from '@angular/forms';

export const isNumberValidator = (
  control: AbstractControl
): { [key: string]: any } | null => {
  return isNaN(+control.value) ? { NaN: { value: control.value } } : null;
};
