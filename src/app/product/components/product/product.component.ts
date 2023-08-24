import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/sample/models/category.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product;

  @Output() addProductToCartEvent = new EventEmitter<Product>();

  onAddToCard() {
    this.addProductToCartEvent.emit(new Product(0,this.product.name,this.product.description, this.product.price, this.product.category, this.product.isAvailable));
    console.log("Product successfully purchased");
  }
}
