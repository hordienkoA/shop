import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})

export class CartListComponent {
  @Input() cartItems!: Array<CartItem>;
  @Input() totalQuantity!: number;
  @Input() totalSum!: number;
  // Обчно пишутся в нижнем регистре
  @Output() QuantityDecrease = new EventEmitter<CartItem>();
  @Output() QuantityIncrease = new EventEmitter<CartItem>();
  @Output() DeleteItem = new EventEmitter<CartItem>();

  onQuantityIncrease(cartItem: CartItem){
    this.QuantityIncrease.emit(cartItem);
  }

  onQuantityDecrease(cartItem: CartItem){
    this.QuantityDecrease.emit(cartItem);
  }

  onDeleteItem(cartItem: CartItem){
    this.DeleteItem.emit(cartItem);
  }
  trackByItems(index: number, item: CartItem): string { return item.product.name; }
}
