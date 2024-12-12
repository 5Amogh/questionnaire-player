import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, fromEvent, merge, of, throwError } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import * as urlConfig from '../constants/url-config.json';
import { ToastService } from './toast.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private onlineStatus = true;
  private offline = false;

  constructor(
    private apiService: ApiService,
    private toaster: ToastService 
  ) {
    this.setupNetworkStatusListener();
  }

  setupNetworkStatusListener() {
    const onlineEvent = fromEvent(window, 'online').pipe(map(() => true));
    const offlineEvent = fromEvent(window, 'offline').pipe(map(() => false));

    merge(onlineEvent, offlineEvent)
      .pipe(startWith(navigator.onLine))
      .subscribe((isOnline: boolean) => {
        this.onlineStatus = isOnline;

        if (this.onlineStatus && this.offline) {
          window.location.reload();
        }
      });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const allUrls = [
      ...Object.values(urlConfig.survey),
      ...Object.values(urlConfig.observation),
      urlConfig.presignedUrl,
    ];

    if (!this.onlineStatus) {
      this.offline = true;
      this.toaster.showToast(
        'You are offline. Please connect to a network.',
        'danger'
      );
      return of(); 
    }
    this.offline = false;


    if (allUrls.some((url) => request.url.includes(url))) {
      const clonedRequest = request.clone({
        setHeaders: {
          'X-auth-token': this.apiService.token,
        },
      });

      return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          if (!this.onlineStatus) {
            return throwError(() => new Error('User is offline'));
          }
          return throwError(() => error);
        })
      );
    }

    return next.handle(request);
  }
}