import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import * as urlConfig from '../../constants/url-config.json';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-observation-entity',
  templateUrl: './observation-entity.component.html',
  styleUrls: ['./observation-entity.component.css', '../listing/listing.component.scss']
})
export class ObservationEntityComponent {
  selectedEntities: any;
  solutionId: any;
  solutionName: any;
  entityToAdd: string;
  filteredEntities: any;
  addedEntities:any;
  entities = new FormControl();
  @ViewChild('searchEntityModal') searchEntityModal:TemplateRef<any>;
  dialogRef: any;

  constructor(private apiService:ApiService, private toaster: ToastService, private router:Router, private dialog: MatDialog){}

  ngOnInit(){
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.solutionId = queryParams['id'];
    this.solutionName = queryParams['name'];
    this.entityToAdd = queryParams['entityType'];
  
    this.apiService.post(urlConfig.observation.getSelectedEntities+this.solutionId,{ [this.entityToAdd]:this.apiService.profileData[this.entityToAdd] })
    .subscribe((res:any) => {
      res = {
        "message": "Observation entities fetched successfully",
        "status": 200,
        "result": {
            "allowMultipleAssessemts": true,
            "_id": "60c73101dc627d53d2bbe0c2",
            "entities": [
                {
                    "_id": "b54a5c6d-98be-4313-af1c-33040b1703aa",
                    "externalId": "2812",
                    "name": "Vizianagaram",
                    "submissionsCount": 0
                },
                {
                    "_id": "2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03",
                    "externalId": "2822",
                    "name": "Ananthapuram",
                    "submissionsCount": 1,
                    "submissionId": "60c7310bdc627d53d2bbe0c3"
                }
            ],
            "entityType": "district",
            "license": {
                "author": "CBSE",
                "creator": "CBSE",
                "copyright": "CBSE",
                "copyrightYear": 1998,
                "contentType": "Course",
                "organisation": [
                    "CBSE"
                ],
                "orgDetails": {
                    "email": null,
                    "orgName": "CBSE"
                },
                "licenseDetails": {
                    "name": "CC BY 4.0",
                    "url": "https://creativecommons.org/licenses/by/4.0/legalcode",
                    "description": "For details see below:"
                },
                "createdOn": "2021-08-06T16:07:21+05:30",
                "lastUpdatedOn": "2021-08-06T16:07:21+05:30"
            },
            "programJoined": false,
            "consentShared": false
        },
        "responseCode": "OK"
    }
      if(res.result){
        this.selectedEntities = res.result
        this.filteredEntities = [...this.selectedEntities.entities]

      }else {
        this.toaster.showToast(res.message, 'Close');
      }
    }, (err: any) => {
      this.selectedEntities =  {
            "allowMultipleAssessemts": true,
            "_id": "60c73101dc627d53d2bbe0c2",
            "entities": [
                {
                    "_id": "b54a5c6d-98be-4313-af1c-33040b1703aa",
                    "externalId": "2812",
                    "name": "Vizianagaram",
                    "submissionsCount": 0
                },
                {
                    "_id": "2f76dcf5-e43b-4f71-a3f2-c8f19e1fce03",
                    "externalId": "2822",
                    "name": "Ananthapuram",
                    "submissionsCount": 1,
                    "submissionId": "60c7310bdc627d53d2bbe0c3"
                }
            ],
            "entityType": "district",
            "license": {
                "author": "CBSE",
                "creator": "CBSE",
                "copyright": "CBSE",
                "copyrightYear": 1998,
                "contentType": "Course",
                "organisation": [
                    "CBSE"
                ],
                "orgDetails": {
                    "email": null,
                    "orgName": "CBSE"
                },
                "licenseDetails": {
                    "name": "CC BY 4.0",
                    "url": "https://creativecommons.org/licenses/by/4.0/legalcode",
                    "description": "For details see below:"
                },
                "createdOn": "2021-08-06T16:07:21+05:30",
                "lastUpdatedOn": "2021-08-06T16:07:21+05:30"
            },
            "programJoined": false,
            "consentShared": false
      }
      this.filteredEntities = [...this.selectedEntities.entities]
      this.toaster.showToast(err.error.message, 'Close');
    })
  }

  openAllEntityList(){
    this.dialogRef = this.dialog.open(this.searchEntityModal, {
      width: '100%',
      height: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
      disableClose:true
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  handleSearchInput(event: any) {
    this.filteredEntities = []
    const searchValue = event.target.value.toLowerCase(); 

    this.filteredEntities = this.selectedEntities.entities.filter((item: any) => 
      item.name.toLowerCase().includes(searchValue)
    );
  }

  navigateToDetails(data){
    this.router.navigate(['observation'],{ queryParams: { 'type':'details', 'name':data.name} })
  }
}
