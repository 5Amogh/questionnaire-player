import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import * as urlConfig from '../../constants/url-config.json';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-observation-domain',
  templateUrl: './observation-domain.component.html',
  styleUrls: ['./observation-domain.component.css', '../listing/listing.component.scss']
})
export class ObservationDomainComponent implements OnInit {
  entityId: any;
  entityName: any;
  entityToAdd: any;
  observations: any = [];
  evidences: any;
  expandedIndex: number | null = null;
  remark: any = "";
  observationId: any = "";
  id: any = "";
  @ViewChild('notApplicableModel') notApplicableModel: TemplateRef<any>;


  constructor(private apiService: ApiService, private toaster: ToastService, private router: Router,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.observationId = queryParams['observationId'];
    this.entityId = queryParams['entityId'];
    this.id = queryParams['id'];
    this.getObservationByEntityId()
  }

  getObservationByEntityId() {
    this.evidences = [];
    this.apiService.post(urlConfig.observation.observationSubmissions + this.observationId + `?entityId=${this.entityId}`, this.apiService.profileData)
      .subscribe((res: any) => {
        
        if (res.result) {
          const result = res.result;
        let evidencesStatus = result
          .filter((obj: any) => obj?._id == this.id)
          .map((obj: any) => obj.evidencesStatus);
        this.evidences = evidencesStatus.flat();
        } else {
          this.toaster.showToast(res.message, 'danger');
        }
      })
  }

  getObservationsByStatus(statuses: ('All' | 'draft' | 'completed' | 'started')[]) {
    if (!this.observations) {
      return [];
    }
    return statuses.includes('All')
      ? this.observations
      : this.observations.filter(obs => statuses.includes(obs.status));
  }

  toggleAccordion(index: number) {
    // If the clicked index is already expanded, close it; otherwise, open the new index
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  navigateToDetails() {
    this.router.navigate(['observation'], {
      queryParams: { type: 'questionnairePlayer' }
    });
  }


  notApplicable(entity) {
    const dialogRef = this.dialog.open(this.notApplicableModel);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        const evidence = {
          externalId: entity?.code,
          remark: this.remark,
          notApplicable: true
        }
        this.updateEntity(evidence)
      }
    });
  }

  updateEntity(evidence) {
    this.apiService.post(urlConfig.observation.update + this.observationId, { evidencesStatus: evidence })

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
}
