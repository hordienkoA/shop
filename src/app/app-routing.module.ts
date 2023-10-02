import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, PathNotFoundComponent } from './pages';
import { CartComponent } from './cart/components/cart/cart.component';
import { OrderComponent } from './orders/components/order/order.component';
import { canActivateOrderGuard } from './core/guards/can-activate-order.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes=[
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'cart',
    component: CartComponent,
    outlet: 'cart'
  },
  {
    path: 'order',
    component: OrderComponent,
    canActivate:[canActivateOrderGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: "**",
    component: PathNotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    AboutComponent,
    RouterModule.forRoot(routes, {bindToComponentInputs: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
