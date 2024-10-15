import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, UrlTree} from '@angular/router';
import { ListingComponent } from '../listing/listing.component';
import { filter } from 'rxjs';
import { ApiConfiguration } from '../../interfaces/questionnaire.type';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'lib-observation-wrapper',
  templateUrl: './observation-wrapper.component.html',
  styleUrls: ['./observation-wrapper.component.css']
})
export class ObservationWrapperComponent implements OnInit, OnChanges{
  @ViewChild('dynamicComponent', { read: ViewContainerRef, static:false }) dynamicComponent!: ViewContainerRef;
  @Input() apiConfig: ApiConfiguration
  initialLoad = false;
  constructor(public router:Router, public apiService:ApiService) {}

  private componentMapper: any = {
    listing:ListingComponent
  };
  
  ngOnChanges(changes:SimpleChanges){
    if(changes['apiConfig']){
      console.log(this.apiConfig)
      this.apiService.baseUrl = this.apiConfig.baseURL;
      this.apiService.token = this.apiConfig.userAuthToken;
      this.apiService.solutionType = 'observation'
      if(!this.initialLoad){
        this.loadComponent('listing');
      }
    }

  }

  ngOnInit() {
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:any) => {
        const urlTree: UrlTree = this.router.parseUrl(event.urlAfterRedirects);
        const type = urlTree.queryParams['type'];
        this.loadComponent(type);
        this.initialLoad = true;
      });
  }

  loadComponent(type: string) {
    if(this.dynamicComponent){
      this.dynamicComponent.clear();
    }
      const componentType = this.componentMapper[type];
      if (componentType) {
        this.dynamicComponent.createComponent(componentType);
      }
  }

  navigate(){
    this.router.navigate(['/observation'], { queryParams:{'type':'listing'}})
  }
  
}
