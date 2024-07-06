import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { authGuard } from './core/guards/auth.guard';
import { CheckoutSuccessComponent } from './components/checkout/checkout-success/checkout-success.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', canActivate: [authGuard], component: CheckoutComponent },
  {
    path: 'checkout/success',
    canActivate: [authGuard],
    component: CheckoutSuccessComponent,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./components/auth/auth.module').then((mod) => mod.AuthModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./components/shop/shop.module').then((mod) => mod.ShopModule),
  },
  {
    path: 'orders',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./components/orders/orders.module').then(
        (mod) => mod.OrdersModule
      ),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: 'basket',
    loadChildren: () =>
      import('./components/basket/basket.module').then(
        (mod) => mod.BasketModule
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
