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
  observationId:any;
  entityId:any;


  constructor(
    private router: Router,
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
    this.searchTerm = event ? event?.target?.value : "";
    console.log("searchTerm",this.searchTerm)
    this.page = 1;
    this.solutionList = { data: [], count: 0 };
    this.getListData();
  }

  async getListData(): Promise<void> {
    console.log("this.listType",this.listType);
    console.log("this.reportPage ",this.reportPage );
    const urlPath = this.reportPage ? urlConfig[this.listType].reportListing : urlConfig[this.listType].listing;
    const queryItems = this.reportPage ? `?page=${this.page}&limit=${this.limit}` : `?type=${this.apiService?.solutionType}&page=${this.page}&limit=${this.limit}&search=${this.searchTerm}`;
    this.apiService.post(
      urlPath + queryItems,
      this.apiService?.profileData
    ).pipe(
      finalize(() =>this.loaded = true),
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
console.log("datttaa",data)
    if(this.reportPage){
    // const type = data?.entities?.length > 1 ? 'domain' : 'reports';
    let entities:any;
    // if(data?.entities?.length == 0 ){
    //   entities = "No solution found".
    // }else 
    if(data?.entities?.length == 1 ){
      entities = data?.entities[0];
    }else{
      entities ="";
    }
    const queryParams = data?.entities?.length > 1 ? { type: 'domain', observationId: data?.observationId, entityId: data.entityId, id: data?._id } :{ 'type': 'reports', 'observationId': `${data.observationId}`, entityId: `${entities?._id }`, 'entityType': entities?.entityType, isMultiple: data?.entities?.length > 1? true : false };

    this.router.navigate(['/observation'], { queryParams: queryParams })

    }else{
      this.router.navigate(['observation'], { queryParams: { 'type': "entityList", 'id': data.solutionId, 'name': `${data.name}`, 'entityType': data.entityType } })
    }

  }

  changeEntityType(selectedType: any) {
    this.selectedEntityType = selectedType?.value;
    this.solutionList.data = this.originalData.filter(solution => solution.entityType === selectedType?.value);
  }
}
