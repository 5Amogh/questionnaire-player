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
        this.solutionList.data =  [
              {
                  "_id": "6017c83a285b99334d2d9683",
                  "entities": [],
                  "name": "AP-TEST-PROGRAM-3.6.5-OBS-IMP-PROJECT-2-DEO",
                  "description": "AP-TEST-PROGRAM-3.6.5-OBS-IMP-PROJECT-2-DEO",
                  "status": "published",
                  "startDate": "2021-02-01T09:22:00.662Z",
                  "endDate": "2022-02-01T09:22:00.662Z",
                  "solutionId": "600b21c57ea68a7ed9278873"
              },
              {
                  "_id": "668f990fffcc1a9c8bf9d1a3",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668f990fffcc1a9c8bf9d19f"
              },
              {
                  "_id": "668f9a2406eb80add3d8f590",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668f9a2406eb80add3d8f58c"
              },
              {
                  "_id": "668f9a734c76b2b05ab0685d",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668f9a734c76b2b05ab06859"
              },
              {
                  "_id": "668fa87f9016351393fb243b",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fa87f9016351393fb2437"
              },
              {
                  "_id": "668fa8829016351393fb246f",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fa8829016351393fb246b"
              },
              {
                  "_id": "668fa89be7764814ad8f4a9a",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fa89be7764814ad8f4a96"
              },
              {
                  "_id": "668fa89ce7764814ad8f4ace",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fa89ce7764814ad8f4aca"
              },
              {
                  "_id": "668fa8b832b0ed15ba759471",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fa8b832b0ed15ba75946d"
              },
              {
                  "_id": "668fa9eb5076ec1e45e9622f",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fa9eb5076ec1e45e9622b"
              },
              {
                  "_id": "668faa1e68b855202802cf9b",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668faa1e68b855202802cf97"
              },
              {
                  "_id": "668faa8868b855202802cfcf",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668faa8868b855202802cfcb"
              },
              {
                  "_id": "668faa936f0b2923fe22f79f",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668faa936f0b2923fe22f79b"
              },
              {
                  "_id": "668fac1efb693830c4b286d3",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fac1efb693830c4b286cf"
              },
              {
                  "_id": "668fac4b475e21323a824c77",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fac4b475e21323a824c73"
              },
              {
                  "_id": "668faced475e21323a824cdc",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668faced475e21323a824cd8"
              },
              {
                  "_id": "668fad1e475e21323a824d41",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fad1e475e21323a824d3d"
              },
              {
                  "_id": "668fad5ab7fa433a68fcc55b",
                  "entities": [],
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "status": "published",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "solutionId": "668fad5ab7fa433a68fcc557"
              },
              {
                  "_id": "6697646d5753871a855ac78b",
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "solutionId": "5f3b947916fdc4ed008171a6",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "status": "published",
                  "entities": []
              },
              {
                  "_id": "6698b1f360f6dc470546db8d",
                  "name": "Enrollment challenges in DIKSHA Courses",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "solutionId": "5f759c4d946feebb14d68d39",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "status": "published",
                  "entities": []
              },
              {
                  "_id": "6698b78b6602befdea13d1d8",
                  "name": "Enrollment 101",
                  "description": "Enrollment challenges in DIKSHA Courses",
                  "solutionId": "5f7f2a02946feebb14d68d54",
                  "startDate": "2023-07-13T02:33:56.617Z",
                  "endDate": "2024-07-13T02:33:57.279Z",
                  "status": "published",
                  "entities": []
              }
          ]
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
    this.router.navigate(['observation/details'])
  }
}
