import { EventsService } from '../services/events.service';

export class CommomCheckOut {
  Progress = {
    'Address': 0,
    'Delivery': 1,
    'Payment': 2,
    'Overview': 3
  };
  constructor(private eventsService: EventsService) { }
  changeProgress(currentProgress) {
    this.eventsService.progressChange.emit(currentProgress);
  }
}
