import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRole } from 'core/enums/user-role';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userCredentials = localStorage.getItem('userCredentials') as string;

  const isAdmin = JSON.parse(userCredentials).role === UserRole.admin;

  if (isAdmin) {
    return true;
  }

  router.navigateByUrl('/error/403');
  return false;
};
