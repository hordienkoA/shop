import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  @Input() products!: Array<Product>;
  @Output() addProductToCartEvent= new EventEmitter<Product>();

  onAddToCart(item: Product){
    console.log(item);
    this.addProductToCartEvent.emit(item);
  }
}
