import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
    userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNzYsIm5hbWUiOiJWaW5vZEZpdmVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhIiwic2Vzc2lvbl9pZCI6OTY2Nywib3JnYW5pemF0aW9uX2lkIjoxLCJyb2xlcyI6W3siaWQiOjE2LCJ0aXRsZSI6ImhlYWRfbWFzdGVyIiwibGFiZWwiOiJIZWFkIE1hc3RlciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9XX0sImlhdCI6MTczMDcyMjI3NSwiZXhwIjoxNzMwNzIyNTc1fQ.FcX1DBa3-4UUWxjjEBXCEZFXaRjc5AuByIJGtV3BkDQ',
    solutionType:'observation',
    profileData:{
      "state": "66bf7eb960de1616f42cb984",
      "district": "66bf7f3560de1616f42cb993",
      "block": "66bb0f8a8d2c4516ea1b44c2",
      "cluster": "66bf7fa78d2c4516ea1b44fe",
      "role": "district_education_officer",
      "school":"123e4567-e89b-12d3-a456-426614174042"
    },
    solutionId:'66cc1f27933415620e0cebad',
    entityType:'school'
  }
}
