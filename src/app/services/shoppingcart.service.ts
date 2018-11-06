import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class ShoppingcartService {
  cart = [];
  constructor() { }

  addToCart(product) {
    this.cart.push(product);
  }

  removeFromCart(product) {
    console.log(this.cart);
    if (this.cart.includes(product)) {
      return _.remove(this.cart, function (removedItem) {
        return removedItem.id === product.id;
      });
    }
  }
}
