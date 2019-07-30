import { CartService } from './../../shared/services/cart.service';
import { Cart } from './../../shared/models/cart';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  public resultCart: any;
  resultProduct: any;
 
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.displayCart()
  }

  displayCart(){
    var cartJSON = [{
      "item_id": 1,
      "item_url": "https://cdn0.iconfinder.com/data/icons/expenses-vs-income/30/__gas_fuel_station_car-256.png",
      "item_name": "Small Gas",
      "total_price": 95.23,
      "quantity": 2
  },
  {
      "item_id": 2,
      "item_url": "https://cdn0.iconfinder.com/data/icons/pokemon-go-vol-1/135/_Canister_Egg-256.png",
      "item_name": "Medium Gas",
      "total_price": 147.82,
      "quantity": 3
  },
  {
      "item_id": 3,
      "item_url": "https://cdn3.iconfinder.com/data/icons/eco-flat-2/512/gas_oil_station_petrol-256.png",
      "item_name": "Large Gas",
      "total_price": 289.39,
      "quantity": 5
  }
];

    return this.resultCart = cartJSON;
  }

  getSubtotal(){
    return this.cartService.getSubtotal;
  }

}
