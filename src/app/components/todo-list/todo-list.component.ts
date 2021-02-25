import { Component, Input, OnInit } from '@angular/core';
import { Todo } from './Todo';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoService],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  desc = '';
  constructor(private todoListervice: TodoService) { }

  ngOnInit() {
    this.gettodoList();
  }
  addTodo(){
    this.todoListervice
      .addTodo(this.desc)
      .then(todo => {
        this.todoList = [...this.todoList, todo];
        this.desc = '';
      });
  }
  textChanges(text) {
    console.log(text);
    this.desc = text;
  }
  toggleTodo(todo: Todo) {
    const i = this.todoList.indexOf(todo);
    this.todoListervice
      .toggleTodo(todo)
      .then(t => {
        this.todoList = [
          ...this.todoList.slice(0,i),
          t,
          ...this.todoList.slice(i+1)
          ];
      });
  }
  removeTodo(todo: Todo) {
    const i = this.todoList.indexOf(todo);
    this.todoListervice
      .deleteTodoById(todo.id)
      .then(()=> {
        this.todoList = [
          ...this.todoList.slice(0,i),
          ...this.todoList.slice(i+1)
        ];
      });
  }
  gettodoList(): void {
    this.todoListervice
      .getTodos()
      .then(todoList => this.todoList = [...todoList]);
  }
}
