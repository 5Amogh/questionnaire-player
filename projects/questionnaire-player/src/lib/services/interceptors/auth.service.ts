import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SurveyService } from '../survey.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(public surveyService: SurveyService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token: any = this.surveyService?.getAuthToken();
    const authReq = req.clone({
      setHeaders: {
        'X-authenticated-user-token': `${token?.bearerToken}`,
      }
    });

    return next.handle(authReq);
  }
}
