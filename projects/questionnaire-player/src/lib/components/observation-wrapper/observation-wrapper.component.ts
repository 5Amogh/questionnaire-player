import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, UrlTree } from '@angular/router';
import { ListingComponent } from '../listing/listing.component';
import { filter } from 'rxjs';
import { ApiConfiguration } from '../../interfaces/questionnaire.type';
import { ApiService } from '../../services/api.service';
import { ObservationEntityComponent } from '../entity-details/observation-entity.component';
import { ObservationDetailsComponent } from '../observation-details/observation-details.component';
import { ReportComponent } from '../report/report.component';
import { ObservationDomainComponent } from '../observation-domain/observation-domain.component';
import { MainWrapperComponent } from '../main-wrapper/main-wrapper.component';
import { PlayerBridgeComponent } from '../player-bridge/player-bridge.component';
import { BackNavigationHandlerComponent } from '../../shared/components/pie-chart/back-navigation-handler/back-navigation-handler.component';

@Component({
  selector: 'lib-observation-wrapper',
  templateUrl: './observation-wrapper.component.html',
  styleUrls: ['./observation-wrapper.component.css']
})
export class ObservationWrapperComponent implements OnInit, OnChanges {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: false }) dynamicComponent!: ViewContainerRef;
  @Input() apiConfig: ApiConfiguration
  initialLoad = false;
  type:any;
  constructor(public router: Router, public apiService: ApiService) { 

  }

  private componentMapper: any = {
    listing: ListingComponent,
    entityList: ObservationEntityComponent,
    details: ObservationDetailsComponent,
    reports: ReportComponent,
    domain:ObservationDomainComponent,
    questionnairePlayer:PlayerBridgeComponent
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['apiConfig']) {
      this.apiService.baseUrl = this.apiConfig.baseURL;
      this.apiService.token = this.apiConfig.userAuthToken;
      this.apiService.solutionType = 'observation';
      this.apiService.profileData = this.apiConfig.profileData;
      this.apiService.solutionId = this.apiConfig.solutionId;
      this.apiService.entityType = this.apiConfig.entityType;
      this.apiService.userAuthToken = this.apiConfig.userAuthToken;
      if (!this.initialLoad) {
      console.log("url11",this.initialLoad);

        this.loadComponent('listing');
      }
    }

  }

  ngOnInit() {
      // console.log("first");

      // let urlQueryParams = this.getQueryParams(window.location.search)

      // console.log('urlQueryParams',urlQueryParams)

  //  if(urlQueryParams?.type){
  //   this.type = urlQueryParams?.type;
  //   this.initialLoad = true;

  //   console.log('this.type',this.type)

  //   this.loadComponent(this.type);
  //  }




    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {

      const urlTree: UrlTree = this.router.parseUrl(event.urlAfterRedirects);
      this.type = urlTree.queryParams['type'];
      console.log("this.type",this.type);
      this.initialLoad = true;
      this.loadComponent(this.type);
    });
  }

  // getQueryParams(queryParams:any){
  //   console.log('getQueryParams',queryParams)
  //   const queryObj: any = {}

  //   if (queryParams.startsWith('?')) {
  //     queryParams = queryParams.substring(1);
  //   }

  //   const queryArray = queryParams.split('&');

  //   queryArray.forEach((query:any) => {
  //       const [key, value] = query.split('=');
  //       queryObj[key] = value 
  //   });
  //   return queryObj;
  // }

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
