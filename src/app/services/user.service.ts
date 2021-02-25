import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../entities';

@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  findUser(username: string): Promise<User> {
    const url = `${this.api_url}/?username=${username}`;
    return this.http.get(url)
      .toPromise()
      .then(res => {
        let users = res as User[];
        return (users.length > 0) ? users[0] : null;
      })
      .catch(this.handleError);
  }
  getUsers(): Promise<User[]> {
    const url = `${this.api_url}`;
    return this.http.get(url)
      .toPromise()
      .then(res => res as User)
      .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}