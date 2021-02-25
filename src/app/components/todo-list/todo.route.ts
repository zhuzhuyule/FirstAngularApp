import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../user/services/auth-guard.service';
import { TodoComponent } from './todo.component';


export const routes: Routes = [
  {
    path: 'todo',
    redirectTo: 'todo/All',
  },
  {
    path: 'todo/:filter',
    component: TodoComponent,
    canActivate: [AuthGuardService],
  }
];

export const routing = RouterModule.forChild(routes);
