import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState, adapter } from "./products.state";
import { productsFeatureKey } from "../app.state";
import { selectRouterState } from "../router";
import { Product } from "src/app/product/models";

export const selectProductsState =
createFeatureSelector<ProductsState>(productsFeatureKey);

export const {
  selectEntities: selectProductsEntitites,
  selectAll: selectProductsData,
}= adapter.getSelectors(selectProductsState);

export const selectSeltctedProductByUrl = createSelector(
  selectProductsEntitites,
  selectRouterState,
  (products, router): Product =>{
    const productID = router.state.params['productID'];
    if(productID){
      return products[productID] as Product;
    }
    else{
      return new Product();
    }
  }

)
