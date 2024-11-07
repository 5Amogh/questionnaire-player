import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import * as urlConfig from '../../constants/url-config.json';
import { DataService } from '../../services/data.service';
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
  @ViewChild('notApplicableModel') notApplicableModel: TemplateRef<any>;


  constructor(private apiService: ApiService, private toaster: ToastService, private router: Router,
    private dataService: DataService, private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.observationId = queryParams['observationId'];
    let entityId = queryParams['entityId'];
    let id = queryParams['id'];
    this.getObservationByEntityId(id, entityId)
    // this.evidencesStatus = this.dataService.getData();

    if (!this.evidences) {
      console.log('No evidencesStatus data found, handle as needed');

    }
  }

  getObservationByEntityId(id: any, entityId: any) {

    this.apiService.post(urlConfig.observation.observationSubmissions + this.observationId + `?entityId=${entityId}`, this.apiService.profileData)
      // this.apiService.post(urlConfig.observation.observationSubmissions + "672b087572f4ef94700087c9" + `?entityId=663c60bbe4d0a4cced6b6399`, this.apiService.profileData)

      .subscribe((res: any) => {

        const result = res.result;
         
        let evidencesStatus= result
  .filter((obj: any) => obj?._id == id)
  .map((obj: any) => obj.evidencesStatus);
        console.log('evidencesStatus:', this.evidences);
        this.evidences = evidencesStatus.flat()
        // if (res.result) {
        //   this.observations = res.result;
        //   // this.filteredEntities = [...this.selectedEntities.entities]

        // } else {
        //   this.toaster.showToast(res.message, 'danger');
        // }
      })
  }

  getObservationsByStatus(statuses: ('All' | 'draft' | 'completed' | 'started')[]) {
    if (!this.observations) {
      return []; // or handle the case as appropriate
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
    console.log("remark", this.remark);
    const dialogRef = this.dialog.open(this.notApplicableModel);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        const evidence = {
          externalId: entity?.code,
          remark: this.remark,
          notApplicable: true
        }
        console.log("confirm", evidence);
        this.updateEntity(evidence)
      }
    });
  }

  updateEntity(evidence) {
    console.log("Updateentity", evidence);
    // evidence
    this.apiService.post(urlConfig.observation.update + this.observationId, { evidencesStatus: evidence })

      .subscribe((res: any) => {

        if (res.status == 200) {
          console.log('updateEntities', res);
          // this.getObservationByEntityId();
        } else {
          this.toaster.showToast(res.message, 'Close');
        }
      }, (err: any) => {
        this.toaster.showToast(err.error.message, 'Close');
      })

  }
}
