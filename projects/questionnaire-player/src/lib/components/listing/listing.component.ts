import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, finalize } from 'rxjs/operators';
import * as urlConfig from '../../constants/url-config.json';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';
import { QueryParamsService } from '../../services/queryParams.service';

@Component({
  selector: 'lib-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  solutionList: any;
  solutionId!: string;
  listType = 'observation';
  searchTerm: string = "";
  stateData: any;
  page: number = 1;
  limit: number = 10;
  reportPage: any = 'false';
  pageTitle: string = 'Observations';
  entityType: any;
  initialSolutionData: any = [];
  selectedEntityType: any = '';
  loaded = false;
  entityId: any;
  isEntityFilterModalOpen: boolean = false;
  allEntities: any;
  solutionListCount :any = 0;
  selectedObservation:any;
  isAnyEntitySelected: boolean = false;

  constructor(
    public router: Router,
    private toaster: ToastService,
    private apiService: ApiService,
    private queryParamsService: QueryParamsService
  ) {
  }

  ngOnInit(): void {
    this.queryParamsService.parseQueryParams();
    this.reportPage = this.queryParamsService.reportPage === 'true';
    this.pageTitle = this.reportPage ? 'Observation Reports' : 'Observations';
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.page = 1;
    this.solutionList = [];
    this.getListData();
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleInput(event);
    }
  }

  handleInput(event?: any): void {
    this.searchTerm = event ? event?.target?.value : "";
    this.page = 1;
    this.solutionList = [];
    this.solutionListCount = 0;
    this.getListData();
  }

  async getListData(): Promise<void> {
    const urlPath = this.reportPage ? urlConfig[this.listType].reportListing : urlConfig[this.listType].listing;
    const queryItems = this.reportPage ? `?page=${this.page}&limit=${this.limit}` : `?type=${this.apiService?.solutionType}&page=${this.page}&limit=${this.limit}&search=${this.searchTerm}`;
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
          this.solutionListCount = res?.result?.count;;
          this.entityType = this.reportPage ? res?.result?.entityType : "";
          this.solutionList = [...this.solutionList, ...res?.result?.data];
          this.initialSolutionData = this.solutionList;
        } else {
          this.toaster.showToast(res?.message, 'Close');
        }
      });
  }

  loadData(): void {
    this.page++;
    this.solutionList = this.initialSolutionData;
    this.getListData();
  }

  navigateTo(data?: any) {
    if (this.reportPage) {
      if (data?.entities?.length > 1) {
        this.allEntities = data?.entities;
        this.selectedObservation = data
        this.openFilter();
      }
      else if (data?.entities?.length == 1) {
        this.router.navigate(['/observation'], { queryParams: { 'type': 'reports', 'observationId': `${data?.observationId}`, entityId: `${data?.entities[0]?._id}`, 'entityType': data?.entityType, isMultiple: false, scores:data?.isRubricDriven ? true : false } })
      } else {
        this.toaster.showToast("No solution found", 'Close');
      }
    } else {
      this.router.navigate(['observation'], { queryParams: { 'type': "entityList", 'id': data.solutionId, 'name': `${data.name}`, 'entityType': data.entityType } })
    }
  }

  changeEntityType(selectedType: any) {
    this.selectedEntityType = selectedType;
    this.solutionList = this.initialSolutionData.filter(solution => solution?.entityType === selectedType);
  }

  openFilter() {
    this.isEntityFilterModalOpen = true;
  }

  closeFilter() {
    this.isEntityFilterModalOpen = false;
  }

  applyFilter() {
    let selectedEntity = this.allEntities.filter(question => question.selected);
    this.router.navigate(['/observation'], { queryParams: { 'type': 'reports', 'observationId': `${this.selectedObservation?.observationId}`, entityId: `${selectedEntity[0]?._id}`, 'entityType': this.selectedObservation?.entityType, isMultiple: false, scores:this.selectedObservation?.isRubricDriven ? true : false  } })
  }

  onEntityChange(selectedIndex: number): void {
    this.allEntities.forEach((entity, index) => {
      if (index !== selectedIndex) {
        entity.selected = false;
      }
    });
    this.isAnyEntitySelected = this.allEntities.some(entity => entity.selected);
  }
}