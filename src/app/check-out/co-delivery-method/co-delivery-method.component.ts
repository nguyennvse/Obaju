import { Component, OnInit } from '@angular/core';
import { CommomCheckOut } from '../co-common';
import { EventsService } from '../../services/events.service';
import { FormService } from '../../services/form.service';
@Component({
  selector: 'app-co-delivery-method',
  templateUrl: './co-delivery-method.component.html',
  styleUrls: ['./co-delivery-method.component.scss']
})
export class CoDeliveryMethodComponent extends CommomCheckOut implements OnInit {

  constructor(
    private formService: FormService,
    eventService: EventsService
  ) {
    super(eventService);
  }

  ngOnInit() {
  }

}
