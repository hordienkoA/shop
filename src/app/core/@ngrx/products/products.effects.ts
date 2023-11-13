import { Injectable } from "@angular/core";
import { Actions, EffectNotification, OnInitEffects, OnRunEffects, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, switchMap, tap } from "rxjs";
import { ProductsPromiseService } from "src/app/product";
import * as ProductsActions from './products.actions';
@Injectable()
export class ProductsEffects implements OnInitEffects, OnRunEffects{

  getProducts$: Observable<Action> = createEffect(()=>
  this.actions$.pipe(
    ofType(ProductsActions.getProducts),
    switchMap(action=>
      this.productPromiseService
      .getProducts()
      .then(products=> ProductsActions.getProductsSuccess({products}))
      .catch(error=> ProductsActions.getProductsError({error})))
  )
);

  constructor(
    private actions$: Actions,
    private productPromiseService: ProductsPromiseService
  ){
    console.log("[PRODUCTS EFFECTS]")
  }
  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return resolvedEffects$.pipe(
      tap(val=> console.log('ngrxOnRunEffects:', val)),
    );
  }
  ngrxOnInitEffects(): Action {
    console.log('ngrxOnInitEffects is called');
    return {type: '[ProductsEffects]: Init'};
  }

}
