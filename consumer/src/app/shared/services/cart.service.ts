import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NavController } from '@ionic/angular';
import { User } from '../models/user';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private NavCtrl: NavController,
    private http: HttpClient
  ) { }

  private cart = [];
  count = 0;
  total_cost = 0;
  
  createCart() {
    return this.cart;
  }

  getCart() {
    // return this.http.get('http://localhost:6063/api/cart');
    return this.cart;
  }

  getProduct(id){
    return this.http.get(`http://localhost:6063/api/products/${id}`);
  }

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

  getProducts(){
    return this.http.get('http://localhost:6063/api/products');
  }

  getSubtotal() {
    return this.total_cost;
  }

}