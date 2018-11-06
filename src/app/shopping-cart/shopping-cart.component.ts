import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from '../services/shoppingcart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: any[];
  constructor(
    private shoppingcartService: ShoppingcartService
  ) { }

  ngOnInit() {
    this.shoppingCart = this.shoppingcartService.cart;
  }

  removeFromCart(product) {
    this.shoppingCart = this.shoppingcartService.removeFromCart(product);
  }

}
