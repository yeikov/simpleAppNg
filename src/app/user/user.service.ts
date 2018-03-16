import { Injectable, Optional, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../message.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http/src/params';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {
  private userServerPathUrl = 'http://localhost:8080/users';

  constructor (
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getUsersss () {
    this.http.get(this.userServerPathUrl).subscribe(data => {
        console.log('user.service.getUsers()');
        console.log(data);
        return data;
    });
  }

  getUsers () {
    this.http.get<User[]>(this.userServerPathUrl).subscribe( data => data );

      return this.http.get<User[]>(this.userServerPathUrl)
        .pipe(
        tap(users => console.log('fetched users'))
        /*
        ,
        catchError(this.handleError('getUsers', []))
        */
      );
  }

  /*
  addUser(data) {
    console.log('data');
    console.log(data.name);
    const obj = {
       id: data.id,
       idforest: data.name,
       numcataleg: data.password

    };
    return this.http.post(this.userServerPathUrl + '/add',  obj );
  } */

  addUser (user: User): Observable<User> {
    console.log('service.addUser user:');
    console.log(user);
    // return this.http.post<User>('http://localhost:8080/user/add', user);
    return this.http.get<User>('http://localhost:8080/users/add' + '/?name=' + user.name + '&password=' + user.password);
  }

  getUser (id) {
    this.http.get<User[]>(this.userServerPathUrl + '/' + id).subscribe( data => data );
      return this.http.get<User[]>(this.userServerPathUrl + '/' + id)
        .pipe(
        tap(user => console.log('fetch user'))
        /*
        ,
        catchError(this.handleError('getUsers', []))
        */
      );
  }

  /** Log a UserService message with the MessageService */
  /* private log(message: string) {
    this.messageService.add('UserService: ' + message);
  } */

}
