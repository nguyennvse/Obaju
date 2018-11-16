import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class ShoppingcartService {
  cart = [];
  constructor() { }

  addToCart(product) {
    if (this.cart.includes(product)) {
      const index = this.cart.findIndex(item => item.id === product.id);
      this.cart[index].quantity += 1;
    } else {
      product.quantity = 1;
      this.cart.push(product);
    }
  }

  removeFromCart(product) {
    if (this.cart.includes(product)) {
      return _.remove(this.cart, obj => obj.id === product.id);
    }
  }

  changeQuantity(product, quantity) {
    const index = this.cart.findIndex(item => item.id === product.id);
    this.cart[index].quantity = quantity;
  }
}
