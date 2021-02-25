import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from './Todo';
import { TodoService } from './todo.service';
@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  desc = '';
  constructor(private todoListervice: TodoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let filter = params['filter'];
      this.filterTodoList(filter);
    })
  }

  filterTodoList(filter: string) {
    this.todoListervice
      .filterTodoList(filter)
      .then(todoList => this.todoList = [...todoList]);
  }
  clearCompleted() {
    const completed_todoList = this.todoList.filter(todo=> todo.completed===true) || [];
    Promise.all(completed_todoList.map(todo => this.removeTodo(todo)));
  }
  toggleAll(isSelectAll: boolean) {
    const needToggleList = this.todoList.filter(todo=> todo.completed===isSelectAll);
    Promise.all(needToggleList.map(todo => this.toggleTodo(todo)));
  }

  addTodo() {
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
          ...this.todoList.slice(0, i),
          t,
          ...this.todoList.slice(i + 1)
        ];
      });
  }
  removeTodo(todo: Todo) {
    const i = this.todoList.indexOf(todo);
    this.todoListervice
      .deleteTodoById(todo.id)
      .then(() => {
        this.todoList = [
          ...this.todoList.slice(0, i),
          ...this.todoList.slice(i + 1)
        ];
      });
  }
}
