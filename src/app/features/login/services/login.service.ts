import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole } from 'core/enums/user-role';
import { User } from 'core/interfaces/user';
import { AlertService, TranslationService } from 'core/services';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private alert = inject(AlertService);
  private router = inject(Router);
  private translation = inject(TranslationService);
  private users: User[] = [
    {
      username: 'user1',
      password: '12345678',
      role: UserRole.user
    },
    {
      username: 'admin',
      password: '12345678',
      role: UserRole.admin
    },
  ];

  login(userCredentials: Pick<User, 'username' | 'password'>): boolean {
    const user = this.users.find(user => user.username === userCredentials.username.toLowerCase() && user.password === userCredentials.password);

    if (!user) {
      this.alert.error(this.translation.instant('ALERT.USER_INVALID'));
      return false;
    }

    localStorage.setItem('userCredentials', JSON.stringify(user));
    this.alert.success(this.translation.instant('ALERT.USER_LOGGED_IN'));
    this.router.navigateByUrl('/');
    return true;
  }
}
