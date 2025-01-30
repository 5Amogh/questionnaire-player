import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private sharedValue = new BehaviorSubject<boolean>(false);
  private sharedFromObservationValue = new BehaviorSubject<boolean>(false);

  sharedValue$ = this.sharedValue.asObservable();
  sharedFromObservationValue$ = this.sharedFromObservationValue.asObservable();

  updateValue(value: boolean): void {
      this.sharedValue.next(value);
  }

  updateFromObservationValue(value: boolean): void {
    this.sharedFromObservationValue.next(value);
}
}
