import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<CartItem> = [];

  public get totalCost(){
    return this.cart.map(el=>(el.product.price || 0 ) * el.quantity).reduce((acc, curr)=> acc + curr , 0);
  }

  public get totalQuantity(){
    return this.cart.map(el=>el.quantity || 0).reduce((acc, curr)=> acc + curr , 0);
  }


  getCartList(){
    return this.cart;
  }

  addToCart(item: Product){
    let existingItem = this.cart.find(el=>el.product.id == item.id);
    if(existingItem){
      //console.log("ttttt");
      existingItem.quantity++;
      return;
    }
    this.cart.push(new CartItem(item, 1));

  }

  removeFromCart(item: Product, deleteItem: boolean = false){
    let existingItem = this.cart.find(el=>el.product.id == item.id);
    if(!deleteItem &&existingItem && existingItem.quantity>1){
      existingItem.quantity--;
    }
    else {
      let index = this.cart.findIndex(el=>el.product.id == item.id);
      if(index> -1){
        this.cart.splice(index, 1);
      }
    }
  }
}
