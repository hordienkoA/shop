import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CartService } from './cart/services/cart.service';
import { ProductsPromiseService } from './product';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let cartServiceSpy: jasmine.SpyObj<CartService>;
  let productServiceSpy: jasmine.SpyObj<ProductsPromiseService>;

  beforeEach(waitForAsync(() => {
    cartServiceSpy = jasmine.createSpyObj('CartService', ['isEmptyCart', 'totalQuantity']);
    productServiceSpy = jasmine.createSpyObj('ProductsPromiseService', ['getProducts']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: CartService, useValue: cartServiceSpy },
        { provide: ProductsPromiseService, useValue: productServiceSpy }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate to cart and set cartService.isDisplayed to true when onDisplayCart is called', () => {
    spyOn(component.router, 'navigate');
    cartServiceSpy.isDisplayed = false;

    component.onDisplayCart();

    expect(component.router.navigate).toHaveBeenCalledWith([{ outlets: { cart: ['cart'] } }]);
    expect(cartServiceSpy.isDisplayed).toBe(true);
  });

});
