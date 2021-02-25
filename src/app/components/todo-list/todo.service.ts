import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Todo } from '../../entities';

@Injectable()
export class TodoService {

  private api_url = 'http://localhost:3000/todos';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }
  // POST /todoList
  addTodo(desc: string): Promise<Todo> {
    const userId: number = +localStorage.getItem('userId');
    let todo = {
      id: UUID.UUID(),
      desc,
      completed: false,
      userId,
    };
    return this.http
      .post(this.api_url, JSON.stringify(todo), { headers: this.headers })
      .toPromise()
      .then(res => res as Todo)
      .catch(this.handleError);
  }
  // patch /todoList/:id
  toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, { completed: !todo.completed });
    return this.http
      .patch(url, JSON.stringify({ completed: !todo.completed }), { headers: this.headers })
      .toPromise()
      .then(() => updatedTodo)
      .catch(this.handleError);
  }
  // DELETE /todoList/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  // GET /todoList
  getTodoList(): Promise<Todo[]> {
    const userId = +localStorage.getItem('userId');
    const url = `${this.api_url}?userId=${userId}`;

    return this.http.get(url)
      .toPromise()
      .then(res => res as Todo[])
      .catch(this.handleError);
  }
  // GET /todoList?completed=true/false
  filterTodoList(filter: string): Promise<Todo[]> {
    const userId = +localStorage.getItem('userId');

    switch (filter) {
      case 'Active': return this.http
        .get(`${this.api_url}?userId=${userId}&completed=false`)
        .toPromise()
        .then(res => res as Todo[])
        .catch(this.handleError);
      case 'Completed': return this.http
        .get(`${this.api_url}?userId=${userId}&completed=true`)
        .toPromise()
        .then(res => res as Todo[])
        .catch(this.handleError);
      default:
        return this.getTodoList();
    }
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}