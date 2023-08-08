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
  // Почему any, а не Product?
  product:any;

  // С множествои не так удобно работать, как с массивом
  cartItems: Set<Product>= new Set<Product>();

  constructor(public productService:ProductService){

  }

  addToCart(item: Product){
    this.cartItems.add(item);
    console.log(this.cartItems);
  }

  removeFromCart(item: Product){
    this.cartItems.delete(item);
  }

  // я обычно методы жизненного цикла пишу после конструктора
    ngOnInit() {
      // Data for first component
      this.product = {
        name: "Test Product",
        description: "Test description",
        price: 99.99,
        isAvailable: true,
        category: Category.Furniture,
    }
    console.log(this.product);
  }
}
