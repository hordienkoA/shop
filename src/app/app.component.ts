import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Product } from './product/models/product.model';
import { CartService } from './cart/services/cart.service';
import { NavigationStart, Router, type RouterOutlet, type Event } from '@angular/router';
import { type Subscription, filter } from 'rxjs'
import { ProductsPromiseService } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {

  title = 'shop';
  product!: Product;
  cartService = inject(CartService);
  productService = inject(ProductsPromiseService);
  router = inject(Router);
  sub: {[key: string]: Subscription} = {};

  @ViewChild('appTitle', {static:false, read: ElementRef}) appTitle!: ElementRef<HTMLHeadingElement>;



  ngAfterViewInit() {
    if(this.appTitle){
      this.appTitle.nativeElement.textContent = "Shop";
    }
  }

  ngOnInit(): void {
    this.setCartServiceOnRefresh();
  }

  ngOnDestroy(): void {
    this.sub['navigationStart'].unsubscribe();
  }


  onActivate($event: Event, routerOutlet: RouterOutlet): void{
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: Event, routerOutlet: RouterOutlet): void{
    console.log('Deactivated Component', $event, routerOutlet);
  }

  onDisplayCart(): void{
    this.router.navigate([{outlets:{cart: ['cart']}}]);
    this.cartService.isDisplayed = true;
  }

  private setCartServiceOnRefresh(): void {
    this.sub['navigationStart'] = this.router.events
      .pipe(filter((event: Event) => event instanceof NavigationStart))
      .subscribe((event: Event) => {
        this.cartService.isDisplayed = (event as NavigationStart).url.includes('cart:');
      });

}

}
