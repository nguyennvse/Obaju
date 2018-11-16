import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: any[];
  constructor(
    private shoppingcartService: ShoppingcartService,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    console.log('this.shoppingcartService.cart', this.shoppingcartService.cart);
    this.shoppingCart = this.shoppingcartService.cart;
    console.log('this.shoppingCart', this.shoppingCart);
  }

  removeFromCart(product) {
    this.shoppingcartService.removeFromCart(product);
    this.shoppingCart = this.shoppingcartService.cart;
  }

  updateQuantity(product, event) {
    this.shoppingcartService.changeQuantity(product, event.target.value);
    this.eventsService.shoppingCartChange.emit(null);
  }
}
