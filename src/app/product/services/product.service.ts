import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from 'src/app/sample/models/category.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    new Product(0, "IPhone X", "Phone", 1000, Category.Phone, true , '/assets/images/apple-iphone.png'),
    new Product(1, "Samsung M52", "Phone", 400, Category.Phone, true, '/assets/images/Galaxy-M52.png'),
    new Product(2, "Playstation 5", "Game Console(will be in future)", 800, Category.GameConsole, false, '/assets/images/ps5.png'),
    new Product(3, "Playstation 4", "Game Console", 600, Category.GameConsole, true, '/assets/images/ps4.png')
  ]


  getProducts(): Array<Product> {
    return this.products;
  }

  getProduct(id: NonNullable<Product['id']> | string){
    return this.products.find(el=>el.id === +id);
  }

}
