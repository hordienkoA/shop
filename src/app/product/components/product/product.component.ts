import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/sample/models/category.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() name: string= "";
  @Input() description?: string;
  @Input() price?: number;
  @Input() category?: Category;
  @Input() isAvailable?: boolean;

  @Output() addProductToCartEvent = new EventEmitter<Product>();
  onAddToCard(){
    this.addProductToCartEvent.emit(new Product(0,this.name,this.description, this.price, this.category, this.isAvailable));
    console.log("Product successfully purchased");
  }
}
