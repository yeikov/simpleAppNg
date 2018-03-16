import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './users.component.html'
})

export class UserComponent implements OnInit {
  title = 'Users';
  users: User[];
  // user = {id: 1, name: 'A', password: '1234'};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

}
