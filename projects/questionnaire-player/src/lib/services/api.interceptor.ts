import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private apiSerive:ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('samiksha')){
      const clonedRequest = request.clone({
        setHeaders:{
          'X-auth-token':this.apiSerive.token,
          "Access-Control-Allow-Origin": "*"
        }
      })
      return next.handle(clonedRequest);
    }
    return next.handle(request);

  }
}
