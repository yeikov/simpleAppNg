import { Injectable, Optional, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Center } from './center';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../message.service';
import { catchError, tap } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http/src/params';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CenterService {
  private centerServerPathUrl = 'http://localhost:8080/centers';

  constructor (
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  getCentersss () {
    this.http.get(this.centerServerPathUrl).subscribe(data => {
        console.log('center.service.getcenters()');
        console.log(data);
        return data;
    });
  }

  getCenters () {
    this.http.get<Center[]>(this.centerServerPathUrl).subscribe( data => data );

      return this.http.get<Center[]>(this.centerServerPathUrl)
        .pipe(
        tap(centers => console.log('fetched centers'))
        /*
        ,
        catchError(this.handleError('getcenters', []))
        */
      );
  }

  /*
  addCenter(data) {
    console.log('data');
    console.log(data.name);
    const obj = {
       id: data.id,
       idforest: data.name,
       numcataleg: data.password

    };
    return this.http.post(this.centerServerPathUrl + '/add',  obj );
  } */

  addCenter (center: Center): Observable<Center> {
    console.log('service.addcenter center:');
    console.log(center);
    // return this.http.post<center>('http://localhost:8080/center/add', center);
    return this.http.get<Center>('http://localhost:8080/centers/add' + '/?name=' + center.name);
  }

  getObj (id) {
    this.http.get<Center[]>(this.centerServerPathUrl + '/' + id).subscribe( data => data );
      return this.http.get<Center[]>(this.centerServerPathUrl + '/' + id)
        .pipe(
        tap(center => console.log('fetch center'))
        /*
        ,
        catchError(this.handleError('getcenters', []))
        */
      );
  }

  /** Log a centerService message with the MessageService */
  /* private log(message: string) {
    this.messageService.add('centerService: ' + message);
  } */

}
