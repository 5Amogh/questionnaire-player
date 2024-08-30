import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import * as urlConfig from '../constants/url-config.json'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private apiService:ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const allUrls = [
      ...Object.values(urlConfig.survey),
      ...Object.values(urlConfig.observation),
      urlConfig.presignedUrl
    ];
    if (allUrls.some(url => request.url.includes(url))) {
      const clonedRequest = request.clone({
        setHeaders: {
          'X-auth-token': this.apiService.token,
        },
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);

  }
}
