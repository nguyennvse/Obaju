import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EventsService {
  shoppingCartChange: EventEmitter<boolean> = new EventEmitter();
  progressChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

}
