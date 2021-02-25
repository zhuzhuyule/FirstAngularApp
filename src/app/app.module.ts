import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { GenderPipe } from './pipes/gender.pipe';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { TodoModule } from './components/todo-list/todo.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserDetailComponent,
    GenderPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TodoModule,
  ],
  providers: [{ provide: 'auth', useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
