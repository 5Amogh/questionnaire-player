import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
    userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNjEsIm5hbWUiOiJGQVJIQU5QQVNIQUFBQUFBcCIsInNlc3Npb25faWQiOjkxMjYsIm9yZ2FuaXphdGlvbl9pZCI6MSwicm9sZXMiOlt7ImlkIjoxMCwidGl0bGUiOiJyZXZpZXdlciIsImxhYmVsIjoiUmV2aWV3ZXIiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MSwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjE4LCJ0aXRsZSI6ImJsb2NrX2VkdWNhdGlvbl9vZmZpY2VyIiwibGFiZWwiOiJCbG9jayBFZHVjYXRpb24gT2ZmaWNlciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjIwLCJ0aXRsZSI6ImRpc3RyaWN0X2VkdWNhdGlvbl9vZmZpY2VyIiwibGFiZWwiOiJEaXN0cmljdCBFZHVjYXRpb24gT2ZmaWNlciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjIxLCJ0aXRsZSI6ImRpc3RyaWN0X3Jlc291cmNlX3BlcnNvbiIsImxhYmVsIjoiRGlzdHJpY3QgUmVzb3VyY2UgUGVyc29uIiwidXNlcl90eXBlIjowLCJzdGF0dXMiOiJBQ1RJVkUiLCJvcmdhbml6YXRpb25faWQiOjI0LCJ2aXNpYmlsaXR5IjoiUFVCTElDIn1dfSwiaWF0IjoxNzI5NjcxMTgxLCJleHAiOjE3Mjk3NTc1ODF9.RKZhbYf9YAjzZOdPMr05PYk-91ES7QDFxqFj4BH_1xc',
    // solutionId:'66cc1fd6933415620e0cebe9',
    solutionType:'observation',
    profileData:{
      "state": "66bf7eb960de1616f42cb984",
      "district": "66bf7f3560de1616f42cb993",
      "block": "66bb0f8a8d2c4516ea1b44c2",
      "cluster": "66bf7fa78d2c4516ea1b44fe",
      "role": "district_education_officer",
      "school":"123e4567-e89b-12d3-a456-426614174042"
    }
  }
}
