import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/sample/models/category.enum';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  @Input() product!: Product;

  @Output() addProductToCartEvent = new EventEmitter<Product>();

  onAddToCard() {
    // А тут разве нельзя было просто {...this.product}?
    this.addProductToCartEvent.emit(new Product(this.product.id,this.product.name,this.product.description, this.product.price, this.product.category, this.product.isAvailable));
    console.log("Product successfully purchased");
  }
}
