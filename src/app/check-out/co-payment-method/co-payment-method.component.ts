import { Component, OnInit } from '@angular/core';
import { CommomCheckOut } from '../co-common';
import { EventsService } from '../../services/events.service';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-co-payment-method',
  templateUrl: './co-payment-method.component.html',
  styleUrls: ['./co-payment-method.component.scss']
})
export class CoPaymentMethodComponent extends CommomCheckOut implements OnInit {

  constructor(
    private formService: FormService,
    eventsService: EventsService
  ) { super(eventsService); }

  ngOnInit() {
  }

}
