import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { routing } from './todo.route';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
  ]
})
export class TodoModule { }
