import { ValidationErrors } from '@angular/forms';

export interface IErrorsRaiseEvent {
  formControlName: string;
  errors: ValidationErrors;
}
