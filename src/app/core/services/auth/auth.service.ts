import { Injectable } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  get userCredential(): User | null {
    const userCredential = localStorage.getItem('userCredential');

    if (!userCredential) return null;
    return JSON.parse(userCredential);
  }

  get isUserLoggedIn() {
    if (this.userCredential) return true;

    return false;
  }
}
