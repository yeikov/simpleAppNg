import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './user.component.html'
})
export class UserComponent {

  title = 'Users';
  users = [];
  user = {id: 1, name: 'A', password: '1234'};

  constructor(private app: UserService) {
    this.app.getUsers();
  }

}
