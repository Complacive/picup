import { Component, OnInit } from '@angular/core';
import { Product } from './../../shared/models/product';
import { ProductService } from '../../shared/services/product.service';



@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.page.html',
  styleUrls: ['./product-info.page.scss'],
})
export class ProductInfoPage implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
