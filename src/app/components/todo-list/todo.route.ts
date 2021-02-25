import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list.component';


export const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,
  }
];

export const routing = RouterModule.forChild(routes);
