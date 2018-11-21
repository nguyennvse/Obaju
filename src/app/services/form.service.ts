import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidate } from '../directives/emailpattern.directive';
import { nameValidate } from '../directives/namepattern.directive';
import { phoneValidate } from '../directives/phonepattern.directive';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  checkOutFormGroup: FormGroup;
  constructor() { }

  createCheckOutFG() {
    this.checkOutFormGroup = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), nameValidate()]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), nameValidate()]),
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(30), emailValidate()]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), phoneValidate()]),
      address: new FormControl('', [Validators.required, Validators.minLength(20)]),
      city: new FormControl('', [Validators.required, Validators.minLength(20)]),
      zip: new FormControl('', [Validators.required, Validators.minLength(20)]),
      state: new FormControl('', [Validators.required, Validators.minLength(20)]),
      country: new FormControl('', [Validators.required, Validators.minLength(20)]),
      deliverymethod: new FormControl('', [Validators.required, Validators.minLength(20)]),
      paymentmethod: new FormControl('', [Validators.required, Validators.minLength(20)]),
    });
  }
}
