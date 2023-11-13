import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { productsFeatureKey } from "../app.state";
import { reducer as productsReducer } from './products.reducer';
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "./products.effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsStoreModule{}
