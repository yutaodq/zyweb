// https://github.com/gothinkster/realworld#community-created-resources
//
//   https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@zyweb/shared/util/environments';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class ApiService {
  private readonly api = environment.baseUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    console.log(':bbbbbbbbbbbbbbbbbbbbbb:'+ this.api+url);
    return this.http.get<T>(this.api+url, {
      headers: this.headers,
      params,
    });
    //   .pipe(
    //   retry(3), // retry a failed request up to 3 times
    //   // catchError(_ => console.log('a')) // then handle the error
    // );
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.http.post<T>(
      `${environment.baseUrl}${url}`,
      JSON.stringify(data),
      { headers: this.headers });
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${environment.baseUrl}${url}`, JSON.stringify(data), {
      headers: this.headers,
    });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${environment.baseUrl}${url}`, {
      headers: this.headers,
    });
  }

  get headers(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }
}
