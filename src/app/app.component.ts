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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'shop';
  product!: Product;

  cartItems: Array<CartItem> = [];
  @ViewChild('appTitle', {static:false, read: ElementRef}) appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(public productService: ProductService, 
              public cartService: CartService)
  {

  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartList();
  }

  ngAfterViewInit() {
    if(this.appTitle){
      this.appTitle.nativeElement.textContent = "Shop";
    }
  }

  onIncreaseQuantityOfCartItems(item: CartItem){
    this.cartService.addToCart(item.product);
  }

  onDecreaseQuantityOfCartItems(item: CartItem){
    this.cartService.removeFromCart(item.product);
  }

  onDeleteItemFromCart(item: CartItem){
    this.cartService.removeFromCart(item.product, true);
  }
}
