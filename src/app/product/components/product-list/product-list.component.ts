import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {

  @Input() products!: Array<Product> | null;

  constructor(public cartService: CartService) {


  }

  onAddToCart(item: Product){
    this.cartService.addProduct(item);
  }
}
