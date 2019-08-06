import { element } from 'protractor';
import { CartService } from './../../shared/services/cart.service';
import { Cart } from './../../shared/models/cart';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  public resultCart= [];
  resultProduct: any;
  totalPrice: Number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    // this.displayCart()
  }

  displayCart(){
    // this.cartService.getCart().subscribe(data => {
    // });
    // this.cartService.getCart()
    this.resultCart = this.cartService.getCart();
  }

  getSubtotal(){
    this.totalPrice = this.cartService.getSubtotal();
  }

}
