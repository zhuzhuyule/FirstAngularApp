import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path: 'todo', component: TodoListComponent },
  {path: 'user', component: UserComponent },
  {path: 'detail/:id', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
