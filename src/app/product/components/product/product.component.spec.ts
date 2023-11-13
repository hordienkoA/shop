import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { Store, StoreModule } from '@ngrx/store';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
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
      imports: [ StoreModule.forRoot({}), RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    if (!jasmine.createSpy('dispatch').and.callThrough) {
      spyOn(store, 'dispatch').and.callThrough();
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit addProductToCartEvent on Buy button click', () => {
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

    const buyButton = fixture.debugElement.query(By.css('#buyBtn'));
    buyButton.triggerEventHandler('click', null);

    expect(component.addProductToCartEvent.emit).toHaveBeenCalledWith(product);
  });

  it('should dispatch router action on Detail link click', () => {
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

    const detailLink = fixture.debugElement.query(By.css('.btn-link'));
    detailLink.triggerEventHandler('click', null);

    const expectedAction = RouterActions.go({
      path: ['/products/item', product.id]
    });

    expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
  });
});
