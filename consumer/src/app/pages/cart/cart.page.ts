import { Cart } from './../../shared/models/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  public resultCart: any;
  
  constructor() { }

  ngOnInit() {
  }

}
