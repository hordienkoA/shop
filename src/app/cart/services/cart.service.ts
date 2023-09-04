import { Injectable } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Array<CartItem> = [];

  get totalCost(){
    return this.cartProducts.map(el=>(el.product.price || 0 ) * el.quantity).reduce((acc, curr)=> acc + curr , 0);
  }

  get totalQuantity(){
    return this.cartProducts.map(el=>el.quantity || 0).reduce((acc, curr)=> acc + curr , 0);
  }

  getProducts(){
    return this.cartProducts;
  }

  addProduct(item: Product){
    let existingItem = this.cartProducts.find(el=>el.product.id == item.id);
    if(existingItem){
      this.increaseQuantity(existingItem);
      return;
    }
    this.cartProducts = [...this.cartProducts, (new CartItem(item, 1))];

  }

  removeProduct(item: Product, deleteItem: boolean = false){
    let existingItem = this.cartProducts.find(el=>el.product.id == item.id);
    if(!deleteItem && existingItem && existingItem.quantity>1){
      this.decreaseQuantity(existingItem);
    }
    else {
      this.cartProducts = this.cartProducts.filter(el=>el.product!== item);
    }
  }

  private changeQuantity(index: number, newQuantity: number){
    if(newQuantity<=0){
      this.cartProducts = this.cartProducts.filter((_, i) => i !== index);
    }
    else{
      this.cartProducts = this.cartProducts.map((product, i) => (i === index ? { ...product, quantity: newQuantity } : product));
    }
  }

  increaseQuantity(item: CartItem, amount: number = 1){
    const existingProductIndex = this.cartProducts.findIndex(p => p.product.id === item.product.id);

    if (existingProductIndex !== -1) {
      this.changeQuantity(existingProductIndex, this.cartProducts[existingProductIndex].quantity + amount);
    }
  }

  decreaseQuantity(item: CartItem, amount: number = 1){
    const existingProductIndex = this.cartProducts.findIndex(p => p.product.id === item.product.id);

    if(existingProductIndex!== -1){
      this.changeQuantity(existingProductIndex, this.cartProducts[existingProductIndex].quantity - amount);

    }
  }

  removeAllProducts(){
    this.cartProducts = [];
  }

  isEmptyCart(): boolean{
    return this.cartProducts.length === 0;
  }
}
