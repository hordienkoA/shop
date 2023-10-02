import { inject } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { CartService } from "src/app/cart/services/cart.service";

export const canActivateOrderGuard:(a: any, b:any)=>boolean  = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);
  const {url} = state;
  console.log('CanActivate Guard is called');
  const sesionId = 123456789;
  const navigationExtras: NavigationExtras ={
    queryParams: {sesionId},
    fragment: 'anchor'
  }
  if(!cartService.isEmptyCart()){
    return true;
  }
  else{
    return false;
  }
};
