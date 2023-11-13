import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Product } from "src/app/product/models";

export interface ProductsState extends EntityState<Product>{
  readonly loading: boolean;
  readonly loaded: boolean;
  readonly error: Error | string | null;
}

function selectProductId(product: Product): number{

  return product.id || 0;
}

function sortProudctsByName(product1: Product, product2: Product):number{
  return product1.name.localeCompare(product2.name);
}
export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: selectProductId,
  sortComparer: sortProudctsByName
});

export const initialProductState: ProductsState = adapter.getInitialState({
  loading: false,
  loaded: false,
  error: null
})
