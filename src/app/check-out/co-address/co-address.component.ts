import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-co-address',
  templateUrl: './co-address.component.html',
  styleUrls: ['./co-address.component.scss']
})
export class CoAddressComponent implements OnInit {

  constructor(
    private formService: FormService
  ) { }

  ngOnInit() {
  }

  test() {
    console.log('this.checkOutFormGroup', this.formService.checkOutFormGroup);
  }
}
