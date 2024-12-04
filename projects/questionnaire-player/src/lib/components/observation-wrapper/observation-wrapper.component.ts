import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, UrlTree } from '@angular/router';
import { ListingComponent } from '../listing/listing.component';
import { filter } from 'rxjs';
import { ApiConfiguration } from '../../interfaces/questionnaire.type';
import { ApiService } from '../../services/api.service';
import { ObservationEntityComponent } from '../entity-details/observation-entity.component';
import { ObservationDetailsComponent } from '../observation-details/observation-details.component';
import { ReportComponent } from '../report/report.component';
import { ObservationDomainComponent } from '../observation-domain/observation-domain.component';
import { PlayerBridgeComponent } from '../player-bridge/player-bridge.component';
import { QueryParamsService } from '../../services/queryParams.service';

@Component({
  selector: 'lib-observation-wrapper',
  templateUrl: './observation-wrapper.component.html',
  styleUrls: ['./observation-wrapper.component.css']
})
export class ObservationWrapperComponent implements OnInit, OnChanges {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: false }) dynamicComponent!: ViewContainerRef;
  @Input() apiConfig: ApiConfiguration
  initialLoad = false;
  type: any;
  constructor(public router: Router, public apiService: ApiService, private queryParamsService: QueryParamsService) { }

  private componentMapper: any = {
    listing: ListingComponent,
    entityList: ObservationEntityComponent,
    details: ObservationDetailsComponent,
    reports: ReportComponent,
    domain: ObservationDomainComponent,
    questionnairePlayer: PlayerBridgeComponent
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['apiConfig']) {
      console.log("this.apiConfig.profileData111", this.apiConfig);
  
      let profileData: any;
  
      // Check explicitly if profileData is undefined or null
      if (this.apiConfig.profileData === undefined || this.apiConfig.profileData === null || this.apiConfig.profileData === "undefined" ) {
        // Retrieve profile data from localStorage if not in apiConfig
        const retrievedString = localStorage.getItem('profileData');
        if (retrievedString) {
          try {
            profileData = JSON.parse(retrievedString);
          } catch (error) {
            console.error("Error parsing stored profileData", error);
          }
        }
      } else {
        // Use profileData from apiConfig and store it in localStorage
        profileData = this.apiConfig.profileData;
        localStorage.setItem('profileData', JSON.stringify(profileData)); // Ensure proper stringification
      }
  
      // Update the service with the new profileData
      this.apiService.baseUrl = this.apiConfig.baseURL;
      this.apiService.token = this.apiConfig.userAuthToken;
      this.apiService.solutionType = 'observation';
      this.apiService.profileData = profileData;
      this.apiService.solutionId = this.apiConfig.solutionId;
      this.apiService.entityType = this.apiConfig.entityType;
      this.apiService.userAuthToken = this.apiConfig.userAuthToken;
      
      // Parse query params if needed
      this.queryParamsService.parseQueryParams();
  
      console.log('Service profileData:', this.apiService.profileData);
  
      if (this.queryParamsService.type) {
        this.type = this.queryParamsService?.type;
        this.initialLoad = true;
        this.loadComponent(this.type);
      } else {
        this.loadComponent('listing');
      }
    }
  }
  

  ngOnInit() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      const urlTree: UrlTree = this.router.parseUrl(event.urlAfterRedirects);
      this.type = urlTree.queryParams['type'];
      this.initialLoad = true;
      this.loadComponent(this.type);
    });
  }

  private initializeApiService(): void {
    this.apiService.baseUrl = this.apiConfig.baseURL;
    this.apiService.token = this.apiConfig.userAuthToken;
    this.apiService.solutionType = 'observation';
    this.apiService.profileData = this.apiConfig.profileData;
    this.apiService.solutionId = this.apiConfig.solutionId;
    this.apiService.entityType = this.apiConfig.entityType;
    this.apiService.userAuthToken = this.apiConfig.userAuthToken;
    this.queryParamsService.parseQueryParams();
  }

  loadComponent(type: string) {
    if (this.dynamicComponent) {
      this.dynamicComponent.clear();
    }
    const componentType = this.componentMapper[type];
    if (componentType) {
      this.dynamicComponent.createComponent(componentType);
    }
  }

  navigate() {
    this.router.navigate(['/observation'], { queryParams: { 'type': 'listing' } })
  }

  navigateReport() {
    this.router.navigate(['/observation'], { queryParams: { 'type': 'reports' } })
  }

}
