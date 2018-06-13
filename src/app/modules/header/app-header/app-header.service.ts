import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URLS } from '../../../app-common/app-config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppHeaderService {
    constructor(private http: HttpClient) {
    }

    static handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error('Error Log from handleError', error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log('Console Log from handleError', `${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getHeaderData(): Observable<any> {
        let appName = URLS.appName;
        let baseUrl = URLS.filterUrl
        let url = baseUrl + appName + "*&pretty";

        return this.http.get(url)
            .pipe(
            // tap(_ => console.log('Customer List Fetched for Add Project Page', _)),
            catchError(AppHeaderService.handleError())
            );
    }
}