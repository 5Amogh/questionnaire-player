// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: any;

  // Method to set data
  setData(data: any) {
    this.data = data;
  }

  // Method to get data
  getData() {
    return this.data;
  }
}
