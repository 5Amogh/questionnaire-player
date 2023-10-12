import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class UtilsService{
  abstract error?(msg);

  abstract getPreSingedUrls?(payload): Observable<any>;

  abstract cloudStorageUpload?(payload): Observable<any>;
  
  constructor() {
  }
}
