import { TestBed, inject } from '@angular/core/testing';
import { ProductsPromiseService } from './poducts-promise.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models';
import { Category } from 'src/app/sample/models/category.enum';

describe('ProductsPromiseService', () => {
  let service: ProductsPromiseService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsPromiseService]
    });

    // Inject the service and the testing controller for HTTP requests
    // Arrange
    service = TestBed.inject(ProductsPromiseService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After each test, make sure that there are no outstanding HTTP requests
    //Assert
    httpTestingController.verify();
  });

  it('should be created', () => {
    //Assert
    expect(service).toBeTruthy();
  });

  it('should get products', () => {
    // Arrange
    const mockProducts: Product[] = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 10, category: Category.ChargingDevices, isAvailable: false, imagePath: ''  },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 20, category: Category.ChargingDevices, isAvailable: false, imagePath: '' }
    ];

    // Set up a mock HTTP request
    //Act
    service.getProducts().then(products => {
    //Assert
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/products');
    expect(req.request.method).toBe('GET');

    // Respond with mock products
    //Act
    req.flush(mockProducts);
  });

  it('should get a product by id', () => {
    // Arrange
    const mockProduct: Product = { id: 1, name: 'Product 1', description: 'Description 1', price: 10, category: Category.ChargingDevices, isAvailable: false, imagePath: '' };

    // Set up a mock HTTP request
    //Act
    service.getProduct(1).then(product => {
    //Assert
      expect(product).toEqual(mockProduct);
    });

    const req = httpTestingController.expectOne('http://localhost:3000/products/1');
    expect(req.request.method).toBe('GET');

    // Respond with mock product
    //Act
    req.flush(mockProduct);
  });
});
