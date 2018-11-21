import { AbstractControl, ValidatorFn } from '@angular/forms';
export function nameValidate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // tslint:disable-next-line:max-line-length
    const namePattern = /^[a-zA-Z]/g;
    const match = namePattern.test(control.value);
    return match ? null : { 'namePattern': { value: control.value } };
  };
}
