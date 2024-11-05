import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
    userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNzYsIm5hbWUiOiJWaW5vZEZpdmVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhIiwic2Vzc2lvbl9pZCI6OTgxMSwib3JnYW5pemF0aW9uX2lkIjoxLCJyb2xlcyI6W3siaWQiOjE2LCJ0aXRsZSI6ImhlYWRfbWFzdGVyIiwibGFiZWwiOiJIZWFkIE1hc3RlciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9XX0sImlhdCI6MTczMDgwOTU4MiwiZXhwIjoxNzMwODA5ODgyfQ.67dVaX3dgk3pi1AkKJ40jK5mIITEbrPcKgak0QvZ0u0',
    solutionType:'observation',
    profileData:{
      // "state": "66bf7eb960de1616f42cb984",
      // "district": "66bf7f3560de1616f42cb993",
      // "block": "66bb0f8a8d2c4516ea1b44c2",
      // "cluster": "66bf7fa78d2c4516ea1b44fe",
      // "role": "district_education_officer",
      // "school":"123e4567-e89b-12d3-a456-426614174042"
    
      "cluster": "22763910-f79f-4746-900b-b429fb7f9d24",
    "district": "24c36610-0640-45a3-b88e-fa92c9ebbec2",
    "state": "bc75cc99-9205-463e-a722-5326857838f8",
    "block": "e5be5e9c-3eea-4822-8754-9009c47c6782",
    "school": "enf3",
    "role": "public"
    },
    solutionId:'66cc1f27933415620e0cebad',
    entityType:'school'
  }
}
