import { Injectable, inject } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';
import { CartItem } from '../models/cart-item.model';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { CartObservableService } from './cart-observable.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  localStorage = inject(LocalStorageService);
  cartObservableService = inject(CartObservableService);
  isDisplayed = false;
  private cartProducts: Array<CartItem> = [];

  constructor() {
     this.cartObservableService.getCart().subscribe(cart=>this.cartProducts = cart);
  }

  get totalCost(){
    return this.cartProducts.map(el=>(el.product.price || 0 ) * el.quantity).reduce((acc, curr)=> acc + curr , 0);
  }

  get totalQuantity(){
    return this.cartProducts.map(el=>el.quantity || 0).reduce((acc, curr)=> acc + curr , 0);
  }

  getProducts(): CartItem[]{
    return this.cartProducts;
  }

  addProduct(item: Product){
    const existingItem = this.cartProducts.find(el=>el.product.id == item.id);
    if(existingItem){
      this.increaseQuantity(existingItem);
      return;
    }

    this.localStorage.setItem(item.id?.toString() ?? ""   , `product ${item.name} was added at ${Date.now}`);
    this.cartObservableService.addProductToCart((new CartItem(null,item, 1))).subscribe(cart=>this.cartProducts = cart);

  }

  removeProduct(item: Product, deleteItem = false){
    const existingItem = this.cartProducts.find(el=>el.product.id == item.id);
    if(!deleteItem && existingItem && existingItem.quantity>1){
      this.decreaseQuantity(existingItem);
      this.localStorage.setItem(item.id?.toString() ?? ""   , `product ${item.name} was changed at ${Date.now}`);
    }
    else if(existingItem) {
      this.cartObservableService.deleteFromCart(existingItem)
      .subscribe(cart=> this.cartProducts = cart);
      this.localStorage.removeItem(item.id?.toString()?? "")
    }

  }

  // private changeQuantity(index: number, newQuantity: number){
  //   if(newQuantity<=0){
  //     this.cartProducts = this.cartProducts.filter((_, i) => i !== index);
  //   }
  //   else{
  //     this.cartProducts = this.cartProducts.map((product, i) => (i === index ? { ...product, quantity: newQuantity } : product));
  //   }
  // }

  private changeQuantity(cartItem: CartItem){
    this.cartObservableService.updateCartItem(cartItem).subscribe(cart=>this.cartProducts = cart);
  }
  increaseQuantity(item: CartItem, amount = 1){
    const existingProduct = this.cartProducts.find(p => p.id === item.id);

    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity + amount;
      this.changeQuantity(existingProduct);
    }
  }

  decreaseQuantity(item: CartItem, amount = 1){
    const existingProduct = this.cartProducts.find(p => p.id === item.id);

    if(existingProduct){
      existingProduct.quantity = existingProduct.quantity - amount;
      this.changeQuantity(existingProduct);
    }
  }

  isEmptyCart(): boolean{
    return this.cartProducts.length === 0;
  }
}
