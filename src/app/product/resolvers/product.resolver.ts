import { ResolveFn, Router } from "@angular/router";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
import { inject } from "@angular/core";

export const productResolver: (a: any, b:any)=>Product = (route, state)=> {
  const productService = inject(ProductService);
  const router = inject(Router);
  console.log("testdsfd");
  if(!route.paramMap.has('productID')){
    return new Product(null, '','',0,undefined, undefined, undefined);

  }

  const id = route.paramMap.get('productID')!;
  return productService.getProduct(id) ?? new Product(null, '','',0,undefined, undefined, undefined);
}
