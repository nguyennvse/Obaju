import { AbstractControl, ValidatorFn } from '@angular/forms';
export function phoneValidate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // tslint:disable-next-line:max-line-length
    const phonePattern = /\D/g;
    const match = phonePattern.test(control.value);
    return match ? { 'phonePattern': { value: control.value } } : null;
  };
}
