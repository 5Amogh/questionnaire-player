import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import * as urlConfig from './../constants/url-config.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl:string;
  public token:string;
  public solutionType:'survey'| 'observation';
  public profileData:any;
  public solutionId :any; 
  public entityType:any
  public userAuthToken:any;
  public observationId:any;
  public entityId:any;
  public submissionNumber:any;
  public evidenceCode:any;
  public index:any;
  public fileSizeLimit:any;

  constructor(private http:HttpClient) { }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(this.baseUrl+url, { params });
  }

  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.baseUrl+url, body, { headers });
  }

  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(this.baseUrl+url, body, { headers });
  }

  postWithFullURL<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers });
  }

  putWithFullURL<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, body, { headers });
  }
  
  delete<T>(url: string, body: any): Observable<T> {
    return this.http.delete<T>(this.baseUrl + url, {body} );
  }

  async getAccessToken(): Promise<string | null> {
    const options = {
        url: urlConfig['profileListing'].refreshTokenUrl,
        headers: { 'Content-Type': 'application/json' },
        body: { refresh_token: localStorage.getItem('refToken') },
    };

        try {
        const res = await this.http.post<any>(this.baseUrl + options.url, options.body, { headers: options.headers }).toPromise();
        return res.result.access_token;
    } catch (error) {
        console.error('Error retrieving access token:', error);
        return null;
    }
    }
}
