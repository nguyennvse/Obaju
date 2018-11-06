import { Component, OnInit } from '@angular/core';
import * as mock from '../../const/mockdata';
import { ShoppingcartService } from '../services/shoppingcart.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  productList: any[];
  constructor(
    private shoppingcartService: ShoppingcartService
  ) { }

  ngOnInit() {
    this.productList = mock.products;
  }

  addToCart(product) {
    this.shoppingcartService.addToCart(product);
  }
}
