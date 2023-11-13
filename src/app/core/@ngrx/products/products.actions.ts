import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/product";

export const getProducts = createAction('[Products List Page (App)] GET_PRODUCTS');

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
  props<{ products: Product[] }>()
);
export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
);
