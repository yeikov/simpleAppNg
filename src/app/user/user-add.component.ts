import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  templateUrl: './user-add.component.html'
})
export class UserAddComponent {

  user = {
    name: '',
    password: ''
  };

  constructor(private http: HttpClient, private userService: UserService) {
   /*  this.http.get('http://localhost:9000').subscribe(data => this.greeting = data); */
  }

  insertUser () {
  if (this.user.name === '') { console.log('user.name===\'\''); console.log(this.user.name); return; }
    this.userService.addUser( this.user as User)
       .subscribe(user => {
        console.log('user-added id? ' + user.id);
    });
 }

}
