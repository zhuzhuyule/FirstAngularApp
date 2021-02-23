import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = '';
  password: string = '';
  constructor(@Inject('auth') private authService) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithCredentials({ name: this.name, password: this.password });
    this.name = '';
    this.password = '';
  }

  onSubmit(formValue) {
    console.log(formValue);
  }

}
