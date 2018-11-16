import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {

  orderSubtotal = 0;
  quantityChangeSub;
  constructor(
    private shoppingCartService: ShoppingcartService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.quantityChangeSub = this.eventsService.shoppingCartChange.subscribe(data => {
      this.orderSubtotal = 0;
      this.calculateOrderSubtotal();
    });
    this.calculateOrderSubtotal();
  }

  calculateOrderSubtotal() {
    this.shoppingCartService.cart.forEach(item => {
      this.orderSubtotal += (item.price * item.quantity);
    });
  }

  ngOnDestroy() {
    this.quantityChangeSub.unsubscribe();
  }
}
