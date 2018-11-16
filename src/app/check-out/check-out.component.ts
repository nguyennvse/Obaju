import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  checkOutFormGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.checkOutFormGroup = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      state: [''],
      country: [''],
      deliverymethod: ['', Validators.required],
      paymentmethod: ['', Validators.required],
    });
    this.test();
  }

  test() {
    console.log('this.checkOutFormGroup', this.checkOutFormGroup);
  }
}
