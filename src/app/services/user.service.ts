import { Injectable } from '@angular/core';
import { users } from './mockUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUser() {
    return users;
  }
}
