import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'product-info', loadChildren: '../product-info/product-info.module#ProductInfoPageModule' },
      { path: 'checkout', loadChildren: '../checkout/checkout.module#CheckoutPageModule' },
      { path: 'cart', loadChildren: '../cart/cart.module#CartPageModule' },
      { path: 'orders', loadChildren: '../orders/orders.module#OrdersPageModule' },
      { path: 'current-order', loadChildren: '../orders/current-order/current-order.module#CurrentOrderPageModule' },
      { path: 'past-orders', loadChildren: '../orders/past-orders/past-orders.module#PastOrdersPageModule' },
    ]
  },
  {path: '', redirectTo: '/menu/home', 
  pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
