import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
    userAuthToken:'',
    solutionType:'observation',
    profileData:{
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
