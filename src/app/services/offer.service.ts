import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Offer } from '../models/offer';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class OfferService {
  private backofficePathUrl = 'http://localhost:8080/backoffice';
  private offersUrl = this.backofficePathUrl+'/offers';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET offers from the server */
  getOffers (): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offersUrl)
      .pipe(
        tap(offers => this.log('fetched offers')),
        catchError(this.handleError('getOffers', []))
      );
  }
  getOfertas () {
    this.http.get(this.offersUrl).subscribe(data => {
        console.log('offer.service.getOfertas()');
        console.log(data);
        return data;
    });
  }
  /** GET offer by id. Return `undefined` when id not found */
  getOfferNo404<Data>(id: number): Observable<Offer> {
    const url = `${this.offersUrl}/?id=${id}`;
    return this.http.get<Offer[]>(url)
      .pipe(
        map(offers => offers[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} offer id=${id}`);
        }),
        catchError(this.handleError<Offer>(`getOffer id=${id}`))
      );
  }

  /** GET offer by id. Will 404 if id not found */
  getOffer(id: number): Observable<Offer> {
    const url = `${this.offersUrl}/${id}`;
    return this.http.get<Offer>(url).pipe(
      tap(_ => this.log(`fetched offer id=${id}`)),
      catchError(this.handleError<Offer>(`getOffer id=${id}`))
    );
  }

  /* GET offers whose name contains search term */
  searchOffers(term: string): Observable<Offer[]> {
    if (!term.trim()) {
      // if not search term, return empty offer array.
      return of([]);
    }
    return this.http.get<Offer[]>(`${this.offersUrl}/?title=${term}`).pipe(
      tap(_ => this.log(`found offers matching "${term}"`)),
      catchError(this.handleError<Offer[]>('searchOffers', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new offer to the server */
  addOffer (offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.offersUrl, offer, httpOptions).pipe(
      tap((offer: Offer) => this.log(`added offer w/ id=${offer.id}`)),
      catchError(this.handleError<Offer>('addOffer'))
    );
  }

  /** DELETE: delete the offer from the server */
  deleteOffer (offer: Offer | number): Observable<Offer> {
    const id = typeof offer === 'number' ? offer : offer.id;
    const url = `${this.offersUrl}/${id}`;

    return this.http.delete<Offer>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted offer id=${id}`)),
      catchError(this.handleError<Offer>('deleteOffer'))
    );
  }

  /** PUT: update the offer on the server */
  updateOffer (offer: Offer): Observable<any> {
    return this.http.put(this.offersUrl, offer, httpOptions).pipe(
      tap(_ => this.log(`updated offer id=${offer.id}`)),
      catchError(this.handleError<any>('updateOffer'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a OfferService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OfferService: ${message}`);
  }
}
