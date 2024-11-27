import { Component } from '@angular/core';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.scss']
})
export class ObsComponent {
  apiConfig ={
    baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
    userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoyNzYsIm5hbWUiOiJWaW5vZEZpdmVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhIiwic2Vzc2lvbl9pZCI6MTA2MjgsIm9yZ2FuaXphdGlvbl9pZCI6MSwicm9sZXMiOlt7ImlkIjoxNiwidGl0bGUiOiJoZWFkX21hc3RlciIsImxhYmVsIjoiSGVhZCBNYXN0ZXIiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MjQsInZpc2liaWxpdHkiOiJQVUJMSUMifSx7ImlkIjoxOCwidGl0bGUiOiJibG9ja19lZHVjYXRpb25fb2ZmaWNlciIsImxhYmVsIjoiQmxvY2sgRWR1Y2F0aW9uIE9mZmljZXIiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MjQsInZpc2liaWxpdHkiOiJQVUJMSUMifSx7ImlkIjoyMCwidGl0bGUiOiJkaXN0cmljdF9lZHVjYXRpb25fb2ZmaWNlciIsImxhYmVsIjoiRGlzdHJpY3QgRWR1Y2F0aW9uIE9mZmljZXIiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MjQsInZpc2liaWxpdHkiOiJQVUJMSUMifSx7ImlkIjoyMSwidGl0bGUiOiJkaXN0cmljdF9yZXNvdXJjZV9wZXJzb24iLCJsYWJlbCI6IkRpc3RyaWN0IFJlc291cmNlIFBlcnNvbiIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9XX0sImlhdCI6MTczMjY4Nzg0NywiZXhwIjoxNzMyNjkxNDQ3fQ.R7Hl46_sYyiF5-dsr73MIJQDJsoW335DYzGmuTV0usU',
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
