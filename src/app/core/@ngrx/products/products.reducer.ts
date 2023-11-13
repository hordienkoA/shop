import { createReducer, on } from "@ngrx/store";
import { adapter, initialProductState } from "./products.state";
import * as ProductsActions from './products.actions';

export const reducer = createReducer(
  initialProductState,
  on(ProductsActions.getProducts, state=>{
    return {
      ...state,
      loading: true
    }
  }),
  on(ProductsActions.getProductsSuccess, (state, {products})=>{
    return adapter.setAll(products, {...state, loading:false, loaded: true});
  }),
  on(ProductsActions.getProductsError, (state, {error})=>{
    return{
      ...state,
      loading: false,
      loaded: false,
      error
    }
  })
)
