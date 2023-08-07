import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from 'src/app/sample/models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [
    new Product("IPhone 11", "Phone", 1000, Category.Phone, true ),
    new Product("Samsung M52", "Phone", 400, Category.Phone, true),
    new Product("Playstation 5 Pro", "Game Console(will be in future)", 800, Category.GameConsole, false)
  ]
  constructor() { }
  public getProducts(){
    return this.products;
  }
}
