import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pages = [
    {
      title: 'Home',
      url: '../menu/home'
    },
    {
      title: 'Cart',
      url:'../menu/cart'
    },
    {
      title: 'Orders',
      url:'../menu/orders'
    },
    {
      title: 'Profile',
      url:'../menu/profile'
    },
  ]; 
  
}
