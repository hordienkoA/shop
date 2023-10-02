import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [CartListComponent, CartItemComponent, CartComponent],
  imports: [
    SharedModule
  ],
  exports:[
    CartListComponent
  ]
})
export class CartModule { }
