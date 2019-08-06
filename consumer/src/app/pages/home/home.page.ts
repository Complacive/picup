import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loadedProducts: Array<any>;

  constructor(
    private navCtrl: NavController,
    private productService: ProductService
  ) { }

  ngOnInit() {
    // this.loadedProducts = this.productService.product;
    this.productService.getAll()
    .then((response: Array<any>) => {
      this.loadedProducts = response;
    }).catch((err) => {
      console.log(err);
    });
  }


}
