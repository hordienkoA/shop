import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductComponent } from '../product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsPromiseService } from '../../services';
@Component({
  standalone: true,
  templateUrl: './product-list.component.html',
  imports: [ProductComponent, SharedModule],
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  //@Input() products!: Array<Product> | null;

  products!: Array<Product>;

  private productService = inject(ProductsPromiseService);
  private cartService = inject(CartService);

  ngOnInit(): void{
    this.productService.getProducts()
    .then(products=>this.products = products)
    .catch(err=> console.error(err))
  }

  onAddToCart(item: Product){
    this.cartService.addProduct(item);
  }
}
