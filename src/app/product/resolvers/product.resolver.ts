import { ResolveFn, Router } from "@angular/router";
import { Product } from "../models/product.model";
import { inject } from "@angular/core";
import { ProductsPromiseService } from "../services";

export const productResolver: (a: any, b:any)=>Promise<Product> = (route, state)=> {
  const productService = inject(ProductsPromiseService);
  const router = inject(Router);
  if(!route.paramMap.has('productID')){
    return Promise.resolve(new Product(null, '','',0,undefined, undefined, undefined));

  }

  const id = route.paramMap.get('productID')!;
  return productService.getProduct(id) ?? new Product(null, '','',0,undefined, undefined, undefined);
}
