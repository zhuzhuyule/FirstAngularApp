import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = 'https://www.fastmock.site/mock/c9f7dcffbe43fd41d21af0d75edca5ec/todo-list/user';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }
}
