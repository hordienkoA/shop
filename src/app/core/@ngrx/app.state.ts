import { ProductsState } from "./products";

export const productsFeatureKey = 'products';
export interface AppState{
  [productsFeatureKey]: ProductsState;
}
