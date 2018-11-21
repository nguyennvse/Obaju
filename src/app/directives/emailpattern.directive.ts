import { AbstractControl, ValidatorFn } from '@angular/forms';
export function emailValidate(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // tslint:disable-next-line:max-line-length
    const emailPattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;
    const match = emailPattern.test(control.value);
    return match ? null : { 'emailPattern': { value: control.value } };
  };
}
