import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, fromEvent, merge, of, throwError, from } from 'rxjs';
import { map, startWith, catchError, switchMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import * as urlConfig from '../constants/url-config.json';
import { ToastService } from './toast.service';
import { UtilsService } from './utils.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private onlineStatus = true;
  private offline = false;

  constructor(
    private apiService: ApiService,
    private toaster: ToastService,
    private utilService: UtilsService
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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.onlineStatus) {
      this.offline = true;
      this.toaster.showToast('You are offline. Please connect to a network.', 'danger');
      return of();
    }

    this.offline = false;

    return from(this.getToken()).pipe(
      switchMap((token) => {
        const allUrls = [
          ...Object.values(urlConfig.survey),
          ...Object.values(urlConfig.observation),
          urlConfig.presignedUrl,
        ];

        const clonedRequest = this.addAuthHeader(request, token);

        if (allUrls.some((url) => request.url.includes(url))) {
          return next.handle(clonedRequest).pipe(
            catchError((error: HttpErrorResponse) => this.handleError(error))
          );
        }

        return next.handle(request);
      })
    );
  }

  async getToken(): Promise<string | null> {
    let token = localStorage.getItem('accToken');
    if (!token) {
      return null;
    }
    const isValidToken = await this.utilService.validateToken(token);
    if (!isValidToken) {
      const data = await this.apiService.getAccessToken();
      if (data) {
        localStorage.setItem('accToken', data);
        return data;
      }
    }
    return token;
  }

  private addAuthHeader(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    if (token) {
      return request.clone({
        setHeaders: {
          'X-auth-token': token,
        },
      });
    }
    return request;
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (!this.onlineStatus) {
      return throwError(() => new Error('User is offline'));
    }
    return throwError(() => error);
  }
}
