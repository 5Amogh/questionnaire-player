import { Injectable } from '@angular/core';
import urlConfig from '../config/url.config.json';
import { ApiBaseService } from './api-base.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import * as mockData from '../surveyInfo.json'
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  authorization: any;
  accessToken: any;
  submissionId: any;
  assessmentResult: any = mockData;
  bearerToken!: string;
  userToken!: string;
  baseURL!: string

  constructor(
    public baseApiService: ApiBaseService
  ) { }

  setAuthToken(apiConfig:any) {
    this.bearerToken = apiConfig?.bearerToken;
    this.userToken = apiConfig?.userAuthToken;
    this.baseURL = apiConfig?.baseURL;
  }

  getAuthToken() {
    let tokens: any = {
      bearerToken: this.bearerToken,
      userToken: this.userToken,
      baseURL: this.baseURL
    }
    return tokens;
  }

  fetchDetails(solutionId: string): Observable<any> {
    const url = `${urlConfig.survey.detailsURL}/${solutionId}`;

    return this.baseApiService.post(this.baseURL,url, {}).pipe(
      map((res: any) => {
        return this.assessmentResult;
      }),
      catchError((err) => {
        console.error('Error fetching survey details:', err);
        return throwError(() => new Error('Could not fetch the details'));
      })
    );
  }
}
