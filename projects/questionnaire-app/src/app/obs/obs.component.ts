import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
    userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNzYsIm5hbWUiOiJWaW5vZEZpdmVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhIiwic2Vzc2lvbl9pZCI6MTAwMjIsIm9yZ2FuaXphdGlvbl9pZCI6MSwicm9sZXMiOlt7ImlkIjoxNiwidGl0bGUiOiJoZWFkX21hc3RlciIsImxhYmVsIjoiSGVhZCBNYXN0ZXIiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MjQsInZpc2liaWxpdHkiOiJQVUJMSUMifV19LCJpYXQiOjE3MzA5OTM5NDIsImV4cCI6MTczMDk5NDI0Mn0.VG5-LsC_SJ_UKHMT4ws7YhEFc2IJQnwDej9hFiLhNYA ',
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
    solutionId:'663c60bbe4d0a4cced6b6399',
    entityType:'school'
  }
}
