import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  // Я не использую ? так как он постоянно требует проверки на наличие данных
  // Можно использовать !, но тогда надо быть уверенным, что данные будут
  // или тип объединить с undefined
  @Input() products?: Array<Product>;
  @Output() addProductToCartEvent= new EventEmitter<Product>();

  // Если параметр необязательный, то тогда надо анализировать когда делать emit
  onAddToCart(item?: Product){
    console.log(item);
    this.addProductToCartEvent.emit(item);
  }
}
