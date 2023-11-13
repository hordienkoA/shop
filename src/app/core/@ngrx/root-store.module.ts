import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { ProductsStoreModule } from "./products/products-store.module";
import { EffectsModule } from "@ngrx/effects";
import { routerReducers } from "./router/router.reducer";
import { RouterState, StoreRouterConnectingModule } from "@ngrx/router-store";
import { CustomSerializer, RouterEffects } from "./router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer // has a priority over routerState
    }),
    EffectsModule.forRoot([RouterEffects]),
    ProductsStoreModule
  ]
})
export class RootStoreModule { }
