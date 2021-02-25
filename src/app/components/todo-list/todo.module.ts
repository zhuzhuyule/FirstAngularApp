import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './todo.route';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoHeaderComponent,
    TodoFooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    routing,
  ]
})
export class TodoModule { }
