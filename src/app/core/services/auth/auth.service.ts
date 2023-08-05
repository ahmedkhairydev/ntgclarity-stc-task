import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get userCredentials(): User | null {
    const userCredentials = localStorage.getItem('userCredentials');

    if (!userCredentials) return null;
    return JSON.parse(userCredentials);
  }

  get isUserLoggedIn() {
    if (this.userCredentials) return true;

    return false;
  }
}
