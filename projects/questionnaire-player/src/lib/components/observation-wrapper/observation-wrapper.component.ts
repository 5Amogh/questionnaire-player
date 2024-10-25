import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, UrlTree } from '@angular/router';
import { ListingComponent } from '../listing/listing.component';
import { filter } from 'rxjs';
import { ApiConfiguration } from '../../interfaces/questionnaire.type';
import { ApiService } from '../../services/api.service';
import { ObservationEntityComponent } from '../entity-details/observation-entity.component';
import { ObservationDetailsComponent } from '../observation-details/observation-details.component';
import { ReportComponent } from '../report/report.component';

@Component({
  selector: 'lib-observation-wrapper',
  templateUrl: './observation-wrapper.component.html',
  styleUrls: ['./observation-wrapper.component.css']
})
export class ObservationWrapperComponent implements OnInit, OnChanges {
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static: false }) dynamicComponent!: ViewContainerRef;
  @Input() apiConfig: ApiConfiguration
  initialLoad = false;
  constructor(public router: Router, public apiService: ApiService) { }

  private componentMapper: any = {
    listing: ListingComponent,
    entityList: ObservationEntityComponent,
    details: ObservationDetailsComponent,
    reports: ReportComponent
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['apiConfig']) {
      this.apiService.baseUrl = this.apiConfig.baseURL;
      this.apiService.token = this.apiConfig.userAuthToken;
      this.apiService.solutionType = 'observation';
      this.apiService.profileData = this.apiConfig.profileData;
      this.apiService.solutionId = this.apiConfig.solutionId;
      this.apiService.entityType = this.apiConfig.entityType;

      if (!this.initialLoad) {
        this.loadComponent('listing');
      }
      // else {
      //   console.log('else')
      //   const queryParams = this.router.parseUrl(this.router.url).queryParams;
      //   const type = queryParams['type'];
      //   console.log('this.router.url2', this.router.url)

      //   console.log('type2', type)
      //   this.loadComponent(type);
      //   this.initialLoad = true;
      // }
    }

  }

  ngOnInit() {
    // console.log('else2')
    // const queryParams = this.router.parseUrl(this.router.url).queryParams;
    // const type = queryParams['type'];
    // console.log('this.router.url', this.router.url)

    // console.log('type', type)
    // this.loadComponent(type);
    // this.initialLoad = true;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: any) => {
      console.log('else3')

      const urlTree: UrlTree = this.router.parseUrl(event.urlAfterRedirects);
      const type = urlTree.queryParams['type'];
      this.loadComponent(type);
      this.initialLoad = true;
    });
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

}
