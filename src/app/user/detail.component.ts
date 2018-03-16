import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './detail.component.html'
})

export class DetailComponent implements OnInit {

  title = 'User';
  user = []; // {id: 1, name: 'A', password: '1234'};

  constructor(private userService: UserService) { }

  ngOnInit() {
    const n = 1;
    this.getUser(n);
  }


  getUser(id): void {
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

}
