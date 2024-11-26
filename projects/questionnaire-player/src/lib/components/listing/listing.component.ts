import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import * as urlConfig from '../../constants/url-config.json';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';
import { BackNavigationHandlerComponent } from '../../shared/components/pie-chart/back-navigation-handler/back-navigation-handler.component';
import { QueryParamsService } from '../../services/queryParams.service';

@Component({
  selector: 'lib-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent extends BackNavigationHandlerComponent implements OnInit {
  solutionList: any = { data: [], count: 0 };
  solutionId!: string;
  listType = 'observation';
  searchTerm: string = "";
  stateData: any;
  page: number = 1;
  limit: number = 10;
  reportPage: any = 'false';
  pageTitle: string = 'Observation';
  entityType: any;
  originalData: any = [];
  selectedEntityType: any = '';
  loaded = false;
  observationId: any;
  entityId: any;
  isFilterModalOpen: boolean = false;
  allEntities:any;


  constructor(
    public router: Router,
    private toaster: ToastService,
    private apiService: ApiService,
    private queryParamsService: QueryParamsService
  ) {
    super(router);
  }

  ngOnInit(): void {
    this.queryParamsService.parseQueryParams();
    this.reportPage = this.queryParamsService.reportPage === 'true';
    this.pageTitle = this.reportPage ? 'Observation Reports' : 'Observation';
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.page = 1;
    this.solutionList = { data: [], count: 0 };
    this.getListData();
  }

  handleInput(event?: any): void {
    console.log("event", event)

    this.searchTerm = event ? event?.target?.value : "";
    console.log("searchTerm", this.searchTerm)
    this.page = 1;
    this.solutionList = { data: [], count: 0 };
    this.getListData();
  }

  async getListData(): Promise<void> {
    const urlPath = this.reportPage ? urlConfig[this.listType].reportListing : urlConfig[this.listType].listing;
    const queryItems = this.reportPage ? `?page=${this.page}&limit=${this.limit}&search=${this.searchTerm}` : `?type=${this.apiService?.solutionType}&page=${this.page}&limit=${this.limit}&search=${this.searchTerm}`;
    this.apiService.post(
      urlPath + queryItems,
      this.apiService?.profileData
    ).pipe(
      finalize(() => this.loaded = true),
      catchError((err: any) => {
        this.toaster.showToast(err?.error?.message, 'Close');
        throw Error(err);
      })
    )
      .subscribe((res: any) => {
        if (res?.status === 200) {
          this.entityType = this.reportPage ? res?.result?.entityType : "";
          this.solutionList.data = [...this.solutionList?.data, ...res?.result?.data];
          this.solutionList.count = res?.result?.count;
          this.originalData = this.solutionList?.data;
        } else {
          this.toaster.showToast(res?.message, 'Close');
        }
      });
  }

  loadData(): void {
    this.page++;
    this.getListData();
  }

  navigateTo(data?: any): void {
    console.log("datttaa", data)
    if (this.reportPage) {
      // const type = data?.entities?.length > 1 ? 'domain' : 'reports';
      this.observationId = data?.observationId;
      this.entityType = data?.entityType;
      if(data?.entities?.length > 1 ){
        // entities = "No solution found"
        this.allEntities = data?.entities;
        this.openFilter()
      }
      else if (data?.entities?.length == 1) {
      this.router.navigate(['/observation'], { queryParams: { 'type': 'reports', 'observationId': `${this.observationId}`, entityId: `${data?.entities[0]?._id}`, 'entityType': this.entityType, isMultiple: false } })

      } else {
        
      }


    } else {
      this.router.navigate(['observation'], { queryParams: { 'type': "entityList", 'id': data.solutionId, 'name': `${data.name}`, 'entityType': data.entityType } })
    }

  }

  changeEntityType(selectedType: any) {
    this.selectedEntityType = selectedType?.value;
    this.solutionList.data = this.originalData.filter(solution => solution.entityType === selectedType?.value);
  }

  openFilter() {
    this.isFilterModalOpen = true;
  }

  closeFilter() {
    this.isFilterModalOpen = false;
  }

  applyFilter(reset: boolean = false) {
    console.log("this.allEntities",this.allEntities);
 let selectedEntity = this.allEntities.filter(question => question.selected);
 console.log("selected",selectedEntity);
 this.router.navigate(['/observation'], { queryParams: { 'type': 'reports', 'observationId': `${this.observationId}`, entityId: `${selectedEntity[0]?._id}`, 'entityType': this.entityType, isMultiple: false } })
      
    
    // if (!reset && this.filteredQuestions.length === 0) {
    //   this.toaster.showToast('Select at least one question', 'danger');
    // }

    // if (reset || this.filteredQuestions.length > 0) {
    //   this.closeFilter();
    // }
  }
}
