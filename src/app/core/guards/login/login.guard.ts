import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userCredentials = localStorage.getItem('userCredentials');

  if (userCredentials) {
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
