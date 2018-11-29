import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { FormService } from '../../services/form.service';
import { EventsService } from '../../services/events.service';
import { CommomCheckOut } from '../co-common';
@Component({
  selector: 'app-co-address',
  templateUrl: './co-address.component.html',
  styleUrls: ['./co-address.component.scss']
})
export class CoAddressComponent extends CommomCheckOut implements OnInit {

  progressChange;
  constructor(
    private formService: FormService,
    private eventService: EventsService
  ) { super(eventService); }

  ngOnInit() {
  }
}
