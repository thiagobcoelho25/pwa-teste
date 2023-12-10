import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

  export const authGuard: CanActivateFn = (route, state) => {
    const router: Router = inject(Router);
    const authService = inject(AuthService);

    console.log(authService.isLogged())
    if(authService.isLogged()){
      return true
    } else {
      return router.navigate(['/login'])
    }
  };
