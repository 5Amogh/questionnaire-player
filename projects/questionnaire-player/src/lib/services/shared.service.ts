import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sharedValue = new BehaviorSubject<boolean>(false);
  sharedValue$ = this.sharedValue.asObservable();

  updateValue(value: boolean): void {
    // if (this.sharedValue.value !== value) { 
      this.sharedValue.next(value);
    // }
  }
}
