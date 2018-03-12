import { Injectable, Optional, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../message.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class UserService {
  private userServerPathUrl = 'http://localhost:8080/back-users';

  constructor (
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getUsersss () {
    this.http.get(this.userServerPathUrl + 'back-users').subscribe(data => {
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

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

}
