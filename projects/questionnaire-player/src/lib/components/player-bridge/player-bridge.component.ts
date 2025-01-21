import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { QueryParamsService } from '../../services/queryParams.service';
@Component({
  selector: 'lib-player-bridge',
  templateUrl: './player-bridge.component.html',
  styleUrls: ['./player-bridge.component.css']
})
export class PlayerBridgeComponent {
  apiConfig:any;
  saveQuestioner:boolean  = false;
  solutionId:any;
  entityId:any;
  observationId:any;
  submissionNumber:any;
  evidenceCode:any;
  index:any;
  
  constructor(
    private apiService:ApiService,
    private queryParamsService: QueryParamsService
  ) {
  }

  ngOnInit(): void {
    this.queryParamsService.parseQueryParams();
    this.observationId = this.queryParamsService?.observationId;
    this.entityId = this.queryParamsService?.entityId;
    this.submissionNumber = this.queryParamsService?.submissionNumber;
    this.evidenceCode = this.queryParamsService?.evidenceCode;
    this.index = this.queryParamsService?.index;
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
      profileData: this.apiService.profileData,
      index:this.index,
      fileSizeLimit: this.apiService.fileSizeLimit,
    }
  }
}
