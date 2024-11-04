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

  
  constructor(
    private apiService:ApiService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.solutionId = queryParams['observationId'];
    this.setApiService();

  }

  setApiService(){
    console.log('set api',this.solutionId);
    this.apiConfig ={
      baseURL: this.apiService.baseUrl,
      userAuthToken: this.apiService.userAuthToken,
      solutionType: 'survey',
      solutionId: this.solutionId,
      entityType: this.apiService.entityType
    }
    console.log('this.apiConfig',this.apiConfig);

  }
}
