import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPage } from './orders.page';

const routes: Routes = [
    {
        path: '',
        component: OrdersPage,
        children: [
            {
                path: 'current',
                children: [
                    {
                        path: '',
                        loadChildren: './current-order/current-order.module#CurrentOrderPageModule'
                    }
                ]
            },
            {
                path: 'past',
                children: [
                    {
                        path: '',
                        loadChildren: './past-orders/past-orders.module#PastOrdersPageModule'
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
  export class OrdersPageRoutingModule{}