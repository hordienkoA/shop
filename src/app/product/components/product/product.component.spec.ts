import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { Product } from '../../models';
import { Category } from 'src/app/sample/models/category.enum';
import { By } from '@angular/platform-browser';
import * as RouterActions from '../../../core/@ngrx/router/router.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: Store;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      //declarations: [ProductComponent],
      // Arrange: Configure the testing module
      imports: [ StoreModule.forRoot({}), RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // Arrange: Create the component and inject dependencies
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    if (!jasmine.createSpy('dispatch').and.callThrough) {
      //Arrange
      spyOn(store, 'dispatch').and.callThrough();
    }
    //Act
    fixture.detectChanges();
  });

  it('should create', () => {
    //Assert
    expect(component).toBeTruthy();
  });

  it('should emit addProductToCartEvent on Buy button click', () => {
    // Arrange
    const product: Product = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 10,
      category: Category.PC,
      isAvailable: true,
      imagePath: 'test-image-path'
    };

    component.product = product;
    spyOn(component.addProductToCartEvent, 'emit').and.callThrough();

    // Act
    const buyButton = fixture.debugElement.query(By.css('#buyBtn'));
    buyButton.triggerEventHandler('click', null);

    //Assert
    expect(component.addProductToCartEvent.emit).toHaveBeenCalledWith(product);
  });

  it('should dispatch router action on Detail link click', () => {
    //Arrange
    const product: Product = {
      id: 1,
      name: 'Test Product',
      description: 'Test Description',
      price: 10,
      category: Category.PC,
      isAvailable: true,
      imagePath: 'test-image-path'
    };

    component.product = product;
    spyOn(store, 'dispatch');

    //Act
    const detailLink = fixture.debugElement.query(By.css('.btn-link'));
    detailLink.triggerEventHandler('click', null);

    // Assert
    const expectedAction = RouterActions.go({
      path: ['/products/item', product.id]
    });

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
