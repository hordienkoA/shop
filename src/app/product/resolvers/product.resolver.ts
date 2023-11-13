import { Product } from "../models/product.model";
import { inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { selectSeltctedProductByUrl } from "src/app/core/@ngrx";

export const productResolver: (a: any, b:any)=>Observable<Product> = (route, state)=> {
  const store = inject(Store);
  if(!route.paramMap.has('productID')){
    return of(new Product(null, '','',0,undefined, undefined, undefined));

  }

  return store.select(selectSeltctedProductByUrl)
}
