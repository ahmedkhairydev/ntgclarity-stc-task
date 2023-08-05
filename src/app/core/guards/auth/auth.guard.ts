import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userCredentials = localStorage.getItem('userCredentials');

  if (userCredentials) {
    return true;
  }

  if (state.url.includes('admin')) {
    router.navigateByUrl('/error/401');
    return false;
  }

  router.navigateByUrl('/login');
  return false;
};
