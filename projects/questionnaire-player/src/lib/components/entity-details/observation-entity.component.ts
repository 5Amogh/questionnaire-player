import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api.service';
import * as urlConfig from '../../constants/url-config.json';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BackNavigationHandlerComponent } from '../../shared/components/pie-chart/back-navigation-handler/back-navigation-handler.component';
import { Location } from '@angular/common';
import { QueryParamsService } from '../../services/queryParams.service';

@Component({
  selector: 'lib-observation-entity',
  templateUrl: './observation-entity.component.html',
  styleUrls: ['./observation-entity.component.css', '../listing/listing.component.scss']
})
export class ObservationEntityComponent extends BackNavigationHandlerComponent {
  selectedEntities: any;
  solutionId: any;
  solutionName: any;
  entityToAdd: string;
  filteredEntities: any;
  filteredEntitiesOne: any;
  addedEntities: any;
  entities = new FormControl();
  @ViewChild('searchEntityModal') searchEntityModal: TemplateRef<any>;
  @ViewChild('confirmDialogModel') confirmDialogModel: TemplateRef<any>;
  dialogRef: any;
  observationId: any;
  searchEntities: any = [];

  constructor(private apiService: ApiService, private toaster: ToastService, private router: Router, private dialog: MatDialog
    , private location: Location, private queryParamsService: QueryParamsService
  ) {
    super(router);

  }

  ngOnInit() {
    this.queryParamsService.parseQueryParams();
    this.solutionId = this.queryParamsService?.id;
    this.solutionName = decodeURIComponent(decodeURIComponent(this.queryParamsService?.name || ''));
    this.entityToAdd = this.queryParamsService?.entityType;
    this.getEntities();
  }

  getEntities() {
    this.selectedEntities = [];
    this.observationId = "";
    this.apiService.post(urlConfig.observation.getSelectedEntities + this.solutionId, this.apiService.profileData)

      .subscribe((res: any) => {

        if (res.result) {
          this.selectedEntities = res?.result;
          this.filteredEntitiesOne = [...this.selectedEntities.entities]
          this.observationId = res?.result?._id
        } else {
          this.toaster.showToast(res.message, 'Close');
        }
      }, (err: any) => {
        this.toaster.showToast(err.error.message, 'Close');
      })
  }

  openAllEntityList() {
    this.getSearchEntities();
    this.dialogRef = this.dialog.open(this.searchEntityModal, {
      width: '100%',
      height: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
      disableClose: true
    })

    this.dialogRef.afterClosed().subscribe((selectedIds: any[]) => {
      if (selectedIds) {
        this.updateEntities(selectedIds);
      }
    });
  }

  updateEntities(selectedEntities) {
    this.apiService.post(urlConfig.observation.updateEntities + this.observationId, { data: selectedEntities })
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.getEntities();
        } else {
          this.toaster.showToast(res.message, 'Close');
        }
      }, (err: any) => {
        this.toaster.showToast(err.error.message, 'Close');
      })
  }

  getSearchEntities() {
    this.apiService.post(urlConfig.observation.searchEntities + this.observationId, this.apiService.profileData)

      .subscribe((res: any) => {

        if (res.result) {
          const searchEntities = res?.result[0];
          this.searchEntities = searchEntities?.data;
          this.filteredEntities = [...searchEntities?.data]

        } else {
          this.toaster.showToast(res.message, 'Close');
        }
      }, (err: any) => {
        this.toaster.showToast(err.error.message, 'Close');
      })
  }

  closeDialog() {
    this.dialogRef.close();
  }

  handleSearchInputOne(event: any) {
    this.filteredEntitiesOne = []
    const searchValue = event.target.value.toLowerCase();

    this.filteredEntitiesOne = this.selectedEntities?.entities.filter((item: any) =>
      item?.name.toLowerCase().includes(searchValue)
    );
  }

  handleSearchInput(event: any) {
    this.filteredEntities = []
    const searchValue = event.target.value.toLowerCase();
    this.filteredEntities = this.searchEntities.filter((item: any) =>
      item?.name.toLowerCase().includes(searchValue)
    );
  }

  navigateToDetails(data) {
    // if(data?.allowMultipleAssessemts){
    this.router.navigate(['observation'], { queryParams: { 'type': 'details', 'name': data.name, 'observationId': this.observationId, 'entityId': data?._id, 'submissionId': data?.submissionId, 'allowMultipleAssessemts': this.selectedEntities?.allowMultipleAssessemts } })
    // }else{
    //   this.router.navigate(['observation'], {
    //     queryParams: { type: 'domain', name: data.name }
    //   });
    // }
  }

  submitDialog() {
    this.dialogRef.close(this.addedEntities);
  }

  deleteEntity(id) {
    const dialogRef = this.dialog.open(this.confirmDialogModel);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.apiService.delete(urlConfig.observation.updateEntities + this.observationId, { data: [id] })

          .subscribe((res: any) => {

            if (res.status == 200) {
              this.getEntities();
            } else {
              this.toaster.showToast(res.message, 'Close');
            }
          }, (err: any) => {
            this.toaster.showToast(err.error.message, 'Close');
          })
      }
    });
  }

  isEntityInFilteredEntitiesOne(entity: any): boolean {
    return this.filteredEntitiesOne.some((filteredEntity: any) => filteredEntity._id === entity._id);
  }

  goBack() {
    this.location.back();
  }

}