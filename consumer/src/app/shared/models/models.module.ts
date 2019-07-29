import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from './cart';
import { Checkout } from './checkout';
import { Merchant } from './merchant';
import { Order } from './order';
import { Product } from './product';
import { User } from './user';


@NgModule({
  declarations: [
    Cart, Checkout, Merchant, Order, Product, User
  ],

  imports: [
    CommonModule
  ],
  
  exports: [
    Cart, Checkout, Merchant, Order, Product, User
  ]
})
export class ModelsModule { }
