import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';

export abstract class UtilsAbstract {
  abstract error?(msg);

  abstract getPreSingedUrls?(payload): Observable<any>;

  abstract cloudStorageUpload?(payload): Observable<any>;
}
@Injectable({
  providedIn: 'root',
})
export abstract class UtilsService extends UtilsAbstract {
  constructor() {
    super();
  }
}
