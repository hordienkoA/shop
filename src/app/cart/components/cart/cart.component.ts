import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public cartService = inject(CartService);
  public router = inject(Router);
  get cartItems(){
    return this.cartService.getProducts();
  }

  onIncreaseQuantityOfCartItems(item: CartItem){
    this.cartService.addProduct(item.product);
  }

  onDecreaseQuantityOfCartItems(item: CartItem){
    this.cartService.removeProduct(item.product);
  }

  onDeleteItemFromCart(item: CartItem){
    this.cartService.removeProduct(item.product, true);
  }

  onClose(): void{
    this.router.navigate([{outlets:{cart: null}}]);
    this.cartService.isDisplayed = false;
  }
}
