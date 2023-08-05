import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userCredentials = localStorage.getItem('userCredentials');

  if (userCredentials) {
    return true;
  }

  router.navigateByUrl('/login');
  return false;
};
