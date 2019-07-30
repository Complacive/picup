import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'product-info', loadChildren: './pages/product-info/product-info.module#ProductInfoPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
