import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { ProductComponent } from '../product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
@Component({
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [ProductComponent, SharedModule],
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  //@Input() products!: Array<Product> | null;

  products!: Array<Product>;

  private productService = inject(ProductService);
  private cartService = inject(CartService);

  ngOnInit(): void{
    this.products = this.productService.getProducts();
  }

  onAddToCart(item: Product){
    this.cartService.addProduct(item);
  }
}
