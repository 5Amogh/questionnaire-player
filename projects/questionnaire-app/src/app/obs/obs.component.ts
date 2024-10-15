import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'<base-url>',
    userAuthToken:'',
    // solutionId:'66cc1fd6933415620e0cebe9',
    solutionType:'observation'
  }
}
