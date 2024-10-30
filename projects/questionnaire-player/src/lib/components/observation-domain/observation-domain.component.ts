import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import * as urlConfig from '../../constants/url-config.json';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'lib-observation-domain',
  templateUrl: './observation-domain.component.html',
  styleUrls: ['./observation-domain.component.css', '../listing/listing.component.scss']
})
export class ObservationDomainComponent implements OnInit{
  entityId: any;
  entityName: any;
  entityToAdd: any;
  observations:any=[];
  evidencesStatus:any[];
  expandedIndex: number | null = null; 


  constructor(private apiService:ApiService, private toaster: ToastService, private router:Router,
    private dataService: DataService,
  ){}


  ngOnInit(): void {
    console.log('domains')
    this.evidencesStatus = this.dataService.getData();
    console.log('evidencesStatus:', this.evidencesStatus);

    // Check if data is undefined (e.g., if the page was refreshed)
    if (!this.evidencesStatus) {
      console.log('No evidencesStatus data found, handle as needed');
      // Fallback logic could go here
    }
    // this.getObservationByEntityId();
  }

  // observations = [
  //   { id: 1, name: 'Observation 1', status: 'In progress' },
  //   { id: 2, name: 'Observation 2', status: 'Completed' },
  //   { id: 3, name: 'Observation 3', status: 'In progress' },
  //   { id: 4, name: 'Observation 4', status: 'Completed' },
  //   { id: 5, name: 'Observation 5', status: 'All' },
  // ];

  "started"
  "draft"
  "completed"
  // getObservationsByStatus(status: 'All' | 'draft' | 'completed') {
  //   return status === 'All' ? this.observations : this.observations.filter(obs => obs.status === status);
  // }
  getObservationsByStatus(statuses: ('All' | 'draft' | 'completed' | 'started')[]) {
    if (!this.observations) {
      return []; // or handle the case as appropriate
    }
    return statuses.includes('All') 
      ? this.observations 
      : this.observations.filter(obs => statuses.includes(obs.status));
  }

  getObservationByEntityId(){
    this.apiService.post(urlConfig.observation.getSelectedEntities+"67077d62ead6ca931040bcc6",{ [this.entityToAdd]:this.apiService.profileData[this.entityToAdd] })
    .subscribe((res:any) => {
      res = {
          "message": "Successfully fetched observation submissions",
          "status": 200,
          "result": [
              {
                  "_id": "64f98031a9e54300089b2659",
                  "evidencesStatus": [
                      {
                          "name": "Observation",
                          "code": "OB",
                          "status": "notstarted",
                          "canBeNotApplicable": false,
                          "canBeNotAllowed": false,
                          "notApplicable": false
                      }
                  ],
                  "isRubricDriven": false,
                  "entityId": "5862b184-5656-4532-8163-186870b913c1",
                  "entityExternalId": "28160300702",
                  "entityType": "school",
                  "observationId": "64f813237b2e940008045df5",
                  "status": "started",
                  "scoringSystem": null,
                  "criteriaLevelReport": false,
                  "submissionNumber": 4,
                  "title": "Observation 4",
                  "updatedAt": "2023-09-07T07:48:01.347Z",
                  "createdAt": "2023-09-07T07:48:01.347Z",
                  "observationName": "Observation 3",
                  "submissionDate": "",
                  "ratingCompletedAt": ""
              },
              {
                  "_id": "64f8612d7b2e9400080466bd",
                  "evidencesStatus": [
                      {
                          "name": "Observation",
                          "code": "OB",
                          "status": "notstarted",
                          "canBeNotApplicable": false,
                          "canBeNotAllowed": false,
                          "notApplicable": false
                      }
                  ],
                  "isRubricDriven": false,
                  "entityId": "5862b184-5656-4532-8163-186870b913c1",
                  "entityExternalId": "28160300702",
                  "entityType": "school",
                  "observationId": "64f813237b2e940008045df5",
                  "status": "started",
                  "scoringSystem": null,
                  "criteriaLevelReport": false,
                  "submissionNumber": 3,
                  "title": "Observation 3",
                  "updatedAt": "2023-09-06T11:23:25.414Z",
                  "createdAt": "2023-09-06T11:23:25.414Z",
                  "observationName": "Observation 3",
                  "submissionDate": "",
                  "ratingCompletedAt": ""
              },
              {
                  "_id": "64f861217b2e940008046682",
                  "evidencesStatus": [
                      {
                          "name": "Observation",
                          "code": "OB",
                          "status": "notstarted",
                          "canBeNotApplicable": false,
                          "canBeNotAllowed": false,
                          "notApplicable": false
                      }
                  ],
                  "isRubricDriven": false,
                  "entityId": "5862b184-5656-4532-8163-186870b913c1",
                  "entityExternalId": "28160300702",
                  "entityType": "school",
                  "observationId": "64f813237b2e940008045df5",
                  "status": "started",
                  "scoringSystem": null,
                  "criteriaLevelReport": false,
                  "submissionNumber": 2,
                  "title": "Observation 2",
                  "updatedAt": "2023-09-06T11:23:13.530Z",
                  "createdAt": "2023-09-06T11:23:13.530Z",
                  "observationName": "Observation 3",
                  "submissionDate": "",
                  "ratingCompletedAt": ""
              },
              {
                  "_id": "64f8611f7b2e940008046678",
                  "evidencesStatus": [
                      {
                          "name": "Observation",
                          "code": "OB",
                          "status": "notstarted",
                          "canBeNotApplicable": false,
                          "canBeNotAllowed": false,
                          "notApplicable": false
                      }
                  ],
                  "isRubricDriven": false,
                  "entityId": "5862b184-5656-4532-8163-186870b913c1",
                  "entityExternalId": "28160300702",
                  "entityType": "school",
                  "scoringSystem": null,
                  "observationId": "64f813237b2e940008045df5",
                  "status": "started",
                  "criteriaLevelReport": false,
                  "submissionNumber": 1,
                  "title": "Observation 1",
                  "updatedAt": "2023-09-06T11:23:11.582Z",
                  "createdAt": "2023-09-06T11:23:11.582Z",
                  "observationName": "Observation 3",
                  "submissionDate": "",
                  "ratingCompletedAt": ""
              }
          ],
          "responseCode": "OK"
      }

      if(res.result){
        this.observations = res.result;
        // this.filteredEntities = [...this.selectedEntities.entities]

      }else {
        this.toaster.showToast(res.message, 'Close');
      }
    })
  }

  toggleAccordion(index: number) {
    // If the clicked index is already expanded, close it; otherwise, open the new index
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  navigateToDetails() {
      this.router.navigate(['observation'], {
        queryParams: { type: 'questionnairePlayer'}
      });
  }
}
