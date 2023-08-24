import { Component, OnInit } from '@angular/core';
import { Category } from './sample/models/category.enum';
import { ProductService } from './product/services/product.service';
import { Product } from './product/models/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shop';
  product!: Product;

  cartItems: Array<Product> = [];

  constructor(public productService: ProductService) {

  }

  ngOnInit() {
    // Data for first component
    this.product = new Product(1, "Test Product", "TestDescription", 99.99, Category.Furniture, true);
    console.log(this.product);
  }
  addToCart(item: Product) {
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

  removeFromCart(item: Product) {
    const index = this.cartItems.indexOf(item, 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
