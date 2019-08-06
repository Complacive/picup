import { Cart } from './../../shared/models/cart';
import { CartService } from './../../shared/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.page.html',
  styleUrls: ['./cart-item.page.scss'],
})
export class CartItemPage implements OnInit {

  productInfo = null;

  constructor(private cartService: CartService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // this.cartService.getProduct(id).subscribe(result => {
    //   this.productInfo = result;
    // });
  }

}
