import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() text: string = '';

  todoList: Todo[] = [
    { id: 0, name: "aaaa" },
    { id: 1, name: "bbbb" },
    { id: 2, name: "cccc" },
    { id: 3, name: "dddd" },
    { id: 4, name: "eeee" }
  ]
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todoList.push({
      id: this.todoList.length,
      name: this.text,
    })
    this.text = '';
  }

  deleteTodo(id): void {
    this.todoList = this.todoList.filter(todo => todo.id != id)
  }
}
