import { Component, Input } from '@angular/core';
import { Product } from 'src/app/product/models/product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Input() products!: Array<Product>;

  trackByItems(index: number, item: Product): string { return item.name; }
}
