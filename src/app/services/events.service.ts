import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventsService {
  shoppingCartChange: EventEmitter<any> = new EventEmitter();
  constructor() { }

}
