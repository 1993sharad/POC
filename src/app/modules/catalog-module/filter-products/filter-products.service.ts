import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { URLS } from '../../../app-common/app-config';
import { of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class FilterProductService {
    constructor(private http: HttpClient) { }
 

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
    getFilters(): Observable<any> {
        // let appName = URLS.appName;
        // let baseUrl = URLS.filterUrl
        // let url = baseUrl + appName + "*&pretty";
        let url = URLS.filterUrl;
        return this.http.get(url)
            .pipe(
            // tap(_ => console.log('Customer List Fetched for Add Project Page', _)),
            catchError(FilterProductService.handleError())
            );
    }


    getFilterValues(url: string): Observable<any> {
        return this.http.get(url)
            .pipe(
            // tap(_ => console.log('Customer List Fetched for Add Project Page', _)),
            catchError(FilterProductService.handleError())
            );
    }

    getProducts(): Observable<any> {
        let productUrl = URLS.productUrl;
        return this.http.get(productUrl)
            .pipe(
            // tap(_ => console.log('Customer List Fetched for Add Project Page', _)),
            catchError(FilterProductService.handleError())
            );
    }

    // http://ee-svcdash01:9200/as_estore/products/_search?default_operator=AND&q=visibility:true&sort=name.keyword:asc&from=0&size=1000
}
