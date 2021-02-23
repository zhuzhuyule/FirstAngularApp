import { Component, OnInit } from '@angular/core';
import {User} from '../../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [
    {id: 0, name: '大叔', gender: true, addr: '北京'},
    {id: 1, name: '大哥', gender: true, addr: '河南'},
    {id: 2, name: '小弟', gender: false, addr: '山东'},
    {id: 3, name: '二货', gender: true, addr: '上海'},
    {id: 4, name: '小姐姐', gender: false, addr: '成都'},
  ];
  constructor() { }

  ngOnInit() {
  }

}