import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-player-bridge',
  templateUrl: './player-bridge.component.html',
  styleUrls: ['./player-bridge.component.css']
})
export class PlayerBridgeComponent {
  apiConfig:any;
  saveQuestioner:boolean = false;
  solutionId:any;
  entityId:any;
  observationId:any;
  submissionNumber:any;
  evidenceCode:any;
  index:any;


  
  constructor(
    private apiService:ApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.observationId = queryParams['observationId'];
    this.entityId = queryParams['entityId'];
    this.submissionNumber = queryParams['submissionNumber'];
    this.evidenceCode = queryParams['evidenceCode'];
    this.index = queryParams['index'];
    this.setApiService();
  }

  setApiService(){
    this.apiConfig ={
      baseURL: this.apiService.baseUrl,
      userAuthToken: this.apiService.userAuthToken,
      solutionType: this.apiService.solutionType,
      solutionId: this.apiService.solutionId,
      observationId: this.observationId,
      entityId: this.entityId,
      submissionNumber: this.submissionNumber,
      evidenceCode: this.evidenceCode,
      entityType: this.apiService.entityType,
      index:this.index
    }
    console.log('this.apiConfig',this.apiConfig);
  }
}
