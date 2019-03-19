import { ValidatorFn, AbstractControl } from '@angular/forms';

export const hasAtLeastOneItemValidator = (items: any[]): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return items.length === 0 ? { emptyCollection: {} } : null;
  };
};
