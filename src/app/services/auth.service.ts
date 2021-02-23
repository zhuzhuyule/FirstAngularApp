import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = '';
  constructor() { }

  loginWithCredentials({ name, password }): void {
    this.currentUser = name;
  }

  getLoginState() {
    return this.currentUser;
  }
}
