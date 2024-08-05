import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiBaseService {
  constructor(public http: HttpClient) { }
  get<T>(baseURL:string, url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(baseURL+url, { params });
  }

  post<T>(baseURL:string, url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(baseURL+url, body, { headers });
  }

  put<T>(baseURL:string, url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(baseURL+url, body, { headers });
  }

  postWithFullURL<T>(baseURL:string, url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers });
  }

  delete<T>(baseURL:string, url: string): Observable<T> {
    return this.http.delete<T>(baseURL+url);
  }
}
