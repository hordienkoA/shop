import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const canActivateAdminAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const {url} = state;
  if(authService.roleCheck("Admin")){
    return true;
  }
  else{
    router.navigate(["/login"]);
    return false;
  }
};
