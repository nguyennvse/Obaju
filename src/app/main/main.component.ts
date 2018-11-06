import { Component, OnInit } from '@angular/core';
import { animation } from '@angular/animations';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { Router } from '@angular/router';
import * as mock from '../../const/mockdata';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  productList: any;
  constructor(
    private router: Router,
    private shoppingcartService: ShoppingcartService
  ) { }

  ngOnInit() {
    this.productList = mock.products.slice(0, 5);
    console.log(mock.products);
  }

  goTo(path) {
    this.router.navigate([path]);
  }
}
