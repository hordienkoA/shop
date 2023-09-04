import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Category } from './sample/models/category.enum';
import { ProductService } from './product/services/product.service';
import { Product } from './product/models/product.model';
import { CartService } from './cart/services/cart.service';
import { CartItem } from './cart/models/cart-item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'shop';
  product!: Product;

  @ViewChild('appTitle', {static:false, read: ElementRef}) appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(public productService: ProductService, 
              public cartService: CartService)
  {

  }

  get cartItems(){
    return this.cartService.getProducts();
  }
  ngAfterViewInit() {
    if(this.appTitle){
      this.appTitle.nativeElement.textContent = "Shop";
    }
  }

  onIncreaseQuantityOfCartItems(item: CartItem){
    this.cartService.addProduct(item.product);
  }

  onDecreaseQuantityOfCartItems(item: CartItem){
    this.cartService.removeProduct(item.product);
  }

  onDeleteItemFromCart(item: CartItem){
    this.cartService.removeProduct(item.product, true);
  }
}
