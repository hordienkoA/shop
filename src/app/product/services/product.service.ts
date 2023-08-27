import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from 'src/app/sample/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    new Product(0, "IPhone 11", "Phone", 1000, Category.Phone, true ),
    new Product(1, "Samsung M52", "Phone", 400, Category.Phone, true),
    new Product(2, "Playstation 5 Pro", "Game Console(will be in future)", 800, Category.GameConsole, false),
    new Product(3, "Bluetti eb70", "Power Station 716W/h 1000W", 600, Category.ChargingDevices, true)
  ]


  getProducts() {
    return this.products;
  }

}
