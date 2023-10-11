import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cartItem!: CartItem;
  @Output() QuantityIncrease = new EventEmitter<CartItem>();
  @Output() QuantityDecrease = new EventEmitter<CartItem>();
  @Output() DeleteItem = new EventEmitter<CartItem>();


  onQuantityIncrease(item: CartItem){
    this.QuantityIncrease.emit(item);
  }

  onQuantityDecrease(item: CartItem){
    this.QuantityDecrease.emit(item);
  }

  onDeleteItem(item: CartItem){
    this.DeleteItem.emit(item);
  }
}
