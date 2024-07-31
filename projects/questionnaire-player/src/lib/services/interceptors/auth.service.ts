import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyService } from '../survey.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public surveyService :SurveyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authToken :any= this.surveyService?.getAuthToken();

    const authReq = req.clone({
      setHeaders: {
        // Authorization: `Bearer ${authToken}`
        Authorization: `Bearer ${authToken?.authToken}` as string,
        'X-authenticated-user-token': `${authToken?.userToken}`,
      }
    });

    return next.handle(authReq);
  }
}
