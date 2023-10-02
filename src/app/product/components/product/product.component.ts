import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  private router = inject(Router);
  @Input() product!: Product;

  @Output() addProductToCartEvent = new EventEmitter<Product>();

  onAddToCard() {
    this.addProductToCartEvent.emit(new Product(this.product.id,this.product.name,this.product.description, this.product.price, this.product.category, this.product.isAvailable));
    console.log("Product successfully purchased");
  }
  onDetailClick(){
    this.router.navigate(['/products/item', this.product.id]);
  }
}
