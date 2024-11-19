import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import * as urlConfig from '../../constants/url-config.json';
import { MatDialog } from '@angular/material/dialog';
import { BackNavigationHandlerComponent } from '../../shared/components/pie-chart/back-navigation-handler/back-navigation-handler.component';
import { QueryParamsService } from '../../services/queryParams.service';
import { catchError, finalize } from 'rxjs';

@Component({
  selector: 'lib-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.css', '../listing/listing.component.scss']
})
export class ObservationDetailsComponent extends BackNavigationHandlerComponent implements OnInit {
  entityId: any;
  entityName: any;
  observationId: any;
  observations: any = [];
  observationName: any;
  observationInit: boolean = false;
  selectedTabIndex = 0;
  allowMultipleAssessemts: any;
  submissionId: any;
  loaded = false;

  @ViewChild('confirmDialogModel') confirmDialogModel: TemplateRef<any>;
  @ViewChild('updateDialogModel') updateDialogModel: TemplateRef<any>;


  constructor(private apiService: ApiService, private toaster: ToastService, private router: Router,
    private dialog: MatDialog, private queryParamsService: QueryParamsService
  ) {
    super(router);
  }

  ngOnInit(): void {
    this.queryParamsService.parseQueryParams();
    this.entityId = this.queryParamsService?.entityId;
    this.entityName = decodeURIComponent(decodeURIComponent(this.queryParamsService?.entityName || ''));
    this.observationId = this.queryParamsService?.observationId;
    this.submissionId = this.queryParamsService?.submissionId;
    this.allowMultipleAssessemts = this.queryParamsService?.allowMultipleAssessemts;
    this.observationInit = true;
    this.getObservationByEntityId();
  }

  getObservationsByStatus(statuses: ('All' | 'draft' | 'completed' | 'started')[]) {
    if (!this.observations) {
      return [];
    }
    return statuses.includes('All')
      ? this.observations
      : this.observations.filter(obs => statuses.includes(obs.status));
  }

  getObservationByEntityId() {
    this.apiService.post(urlConfig.observation.observationSubmissions + this.observationId + `?entityId=${this.entityId}`, this.apiService.profileData)
    .pipe(
      finalize(() =>this.loaded = true),
      catchError((err: any) => {
        this.toaster.showToast(err?.error?.message, 'Close');
        throw Error(err);
      })
    )
      .subscribe((res: any) => {
        if (res?.result) {
          if (this.observationInit && !res?.result?.length) {
            this.observationInit = false;
            this.observeAgain();
          } else {
            this.observationInit = false;
            this.observations = res?.result;
          }
        } else {
          this.toaster.showToast(res?.message, 'danger');
        }
      })
  }

  navigateToDetails(data) {

    if (data?.isRubricDriven) {
      this.router.navigate(['observation'], {
        queryParams: { type: 'domain', observationId: data?.observationId, entityId: data.entityId, id: data?._id }
      });
    } else {
      this.router.navigate(['observation'], {
        queryParams: {
          type: 'questionnairePlayer', observationId: data?.observationId, entityId: data?.entityId, submissionNumber: data?.submissionNumber, evidenceCode: data?.evidencesStatus[0]?.code, index: 0
        }
      });
    }
  }

  editEntity(entity: any, id: any) {
    this.observationName = entity;
    const dialogRef = this.dialog.open(this.updateDialogModel);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'update') {
        this.updateEntity(id);
      }
    });
  }


  deleteEntity(id: any) {

    const dialogRef = this.dialog.open(this.confirmDialogModel);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.apiService.delete(urlConfig.observation.update + id, { data: [] })
          .subscribe((res: any) => {
            if (res.status == 200) {
              this.getObservationByEntityId();
            } else {
              this.toaster.showToast(res.message, 'Close');
            }
          }, (err: any) => {
            this.toaster.showToast(err.error.message, 'Close');
          })
      }
    });
  }

  updateEntity(id: any) {
    const payload = {
      title: this.observationName
    }
    this.apiService.post(urlConfig.observation.update + id, payload)
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.getObservationByEntityId();
        } else {
          this.toaster.showToast(res.message, 'Close');
        }
      }, (err: any) => {
        this.toaster.showToast(err.error.message, 'Close');
      })
  }

  observeAgain() {
    this.apiService.post(urlConfig.observation.create + this.observationId + `?entityId=${this.entityId}`, {})
      .subscribe((res: any) => {
        if (res.result) {
          this.getObservationByEntityId();
        } else {
          this.toaster.showToast(res.message, 'danger');
        }
      })
  }

  viewReport(entity?) {
    this.router.navigate(['/observation'], { queryParams: { 'type': 'reports', 'submissionId': entity?._id, 'observationId': this.observationId, entityId: this.entityId, 'entityType': entity ? entity?.entityType : this.observations[0]?.entityType } })
  }

  isViewReportDisabled(): boolean {
    switch (this.selectedTabIndex) {
      case 0:
        return this.getObservationsByStatus(['All']).length === 0;
      case 1:
        return this.getObservationsByStatus(['draft', 'started']).length === 0;
      case 2:
        return this.getObservationsByStatus(['completed']).length === 0;
      default:
        return true;
    }
  }
}