import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { BaseURL } from '../../../environments/environment';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private NavCtrl: NavController
  ) { }

  // private cartSubject = new Subject<CartState>();
  // private userCart: Cart [] = [];
  // authUser: User;

  private cart = [];
  count = 0;
  total_cost = 0;

  createCart() {
    return this.cart;
  }

  getCart() {
    return this.cart;
  }

  /*
  addToCart(Product, ) {
    //check if cart contains Product
    //If so, 
    let inputProdId = Product.get_product_id();
    let identicalProds = 0;
    for (let i = 0; i < this.count; i++) {
      let currentProdId = this.cart[i][0];
      if (inputProdId === currentProdId) {
        this.cart[i][1]++;
        identicalProds++;
      }
      else {}
    }

    if(identicalProds !== 0) {
      this.cart.push([Product.get_product_id(), 1]);
    }
    else {}
  }
  */

  addToCart(Product, numItemsToAdd) {
    let similarProds = 0;

    for (let i = 0; i < this.count; i++) {
      if (this.cart[i][0] == Product.get_product_id()) {
        if (this.cart[i][1] !== numItemsToAdd) {
          this.cart[i][1] = numItemsToAdd;
          this.total_cost = numItemsToAdd * this.cart[i][0].get_product_price();
          similarProds++;
        } else { }
      } else { }

      if (similarProds === 0) {
        this.cart.push([Product.get_product_id, numItemsToAdd]);
        this.total_cost = numItemsToAdd * this.cart[i][0].get_product_price();
        this.count++;
      } else { }
    }
  }

  getSubtotal() {
    return this.total_cost;
  }

}