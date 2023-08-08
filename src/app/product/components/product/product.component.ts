import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/sample/models/category.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // На мой взгляд лучше передать целиком объект, чем отдельные поля
  // Если так сделать, то ниже в методе не надо будет создавать объект
  // а можно будет сразу передать то, что пришло
  @Input() name: string= "";
  @Input() description?: string;
  @Input() price?: number;
  @Input() category?: Category;
  @Input() isAvailable?: boolean;

  @Output() addProductToCartEvent = new EventEmitter<Product>();

  onAddToCard() {
    this.addProductToCartEvent.emit(new Product(0,this.name,this.description, this.price, this.category, this.isAvailable));
    console.log("Product successfully purchased");
  }
}
