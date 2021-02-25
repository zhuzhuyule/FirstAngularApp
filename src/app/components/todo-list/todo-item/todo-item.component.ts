import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() desc = '';
  @Input() isChecked = false;

  @Output() onToggleTodo = new EventEmitter();
  @Output() onRemoveTodo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  toggleTodo() {
    this.onToggleTodo.emit();
  }
  removeTodo() {
    this.onRemoveTodo.emit();
  }

}
