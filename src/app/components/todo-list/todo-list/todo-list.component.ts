import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  _todoList: Todo[] = [];

  @Input() 
  get todoList() {
    return this._todoList;
  }
  set todoList(list: Todo[]) {
    this._todoList = [...list];
  }

  @Output() onRemoveTodo = new EventEmitter<Todo>();
  @Output() onToggleTodo = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  removeTodo(todo: Todo) {
    this.onRemoveTodo.emit(todo);
  }

  toggleTodo(todo: Todo) {
    this.onToggleTodo.emit(todo);
  }
}
