import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserRole } from 'core/enums/user-role';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userCredentials = localStorage.getItem('userCredentials') as string;

  const isUser = JSON.parse(userCredentials).role === UserRole.user;

  if (isUser) {
    return true;
  }

  router.navigateByUrl('/admin');
  return false;
};
