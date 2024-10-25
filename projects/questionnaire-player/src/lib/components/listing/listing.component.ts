import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import * as urlConfig from '../../constants/url-config.json';
import { ToastService } from '../../services/toast.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'lib-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  solutionList: any = { data: [], count: 0 };
  solutionId!: string;
  listType = 'observation';
  searchTerm: string = "";
  stateData: any;
  page: number = 1;
  limit: number = 10;
  showLoading: boolean = true;
  reportPage: boolean = false;

  constructor(
    private router: Router,
    private toaster: ToastService,
    private apiService:ApiService
  ) {
   
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.page = 1;
    this.solutionList = { data: [], count: 25};
    this.showLoading = true;
    this.getListData();
  }


  handleInput(event: any): void {
    this.searchTerm = event.target.value;
    this.page = 1;
    this.solutionList = { data: [], count: 0 };
    this.getListData();
  }

  async getListData(): Promise<void> {
    this.showLoading = true;
    this.apiService.post(
      urlConfig[this.listType].listing + `?type=${this.apiService.solutionType}&page=${this.page}&limit=${this.limit}&filter=''&search=${this.searchTerm}`,{}
    ).pipe(
      finalize(() => this.showLoading = false)
    ).subscribe((res: any) => {
      if (res?.status === 200) {
        this.solutionList.data = [...this.solutionList.data, ...res.result.data];
        this.solutionList.count = res.result.count;
      } else {
        this.toaster.showToast(res.message, 'Close');
      }
    }, (err: any) => {
      this.toaster.showToast(err.error.message, 'Close');
    });
  }


  loadData(): void {
    this.page++;
    this.getListData();
  }

  navigateTo(data: any): void {
    this.router.navigate(['observation'],{ queryParams: { 'type':'entityList', 'id':data.solutionId, 'name':`${data.name}`, 'entityType':data.entityType} })
  }
}
