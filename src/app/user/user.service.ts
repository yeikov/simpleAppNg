import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
    // console.log('asdf' + 'serverPath');
  }

  getUsers () {

        this.http.get('http://localhost:8080/' + 'back-users').subscribe(data => {
            console.log('user.service.getUsers()');
            return data;
        });

    }
}
