import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import * as urlConfig from '../../constants/url-config.json';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'lib-observation-details',
  templateUrl: './observation-details.component.html',
  styleUrls: ['./observation-details.component.css', '../listing/listing.component.scss']
})
export class ObservationDetailsComponent implements OnInit {
  entityId: any;
  entityName: any;
  observationId: any;
  observations: any = [];
  observationName: any;
  count:any =1;

  @ViewChild('confirmDialogModel') confirmDialogModel: TemplateRef<any>;
  @ViewChild('updateDialogModel') updateDialogModel: TemplateRef<any>;


  constructor(private apiService: ApiService, private toaster: ToastService, private router: Router,
    private dataService: DataService,
    private dialog: MatDialog
  ) { }


  ngOnInit(): void {
    const queryParams = this.router.parseUrl(this.router.url).queryParams
    this.entityId = queryParams['entityId'];
    this.entityName = queryParams['name'];
    this.observationId = queryParams['observationId'];
    this.getObservationByEntityId();
  }

  // observations = [
  //   { id: 1, name: 'Observation 1', status: 'In progress' },
  //   { id: 2, name: 'Observation 2', status: 'Completed' },
  //   { id: 3, name: 'Observation 3', status: 'In progress' },
  //   { id: 4, name: 'Observation 4', status: 'Completed' },
  //   { id: 5, name: 'Observation 5', status: 'All' },
  // ];

  // getObservationsByStatus(status: 'All' | 'draft' | 'completed') {
  //   return status === 'All' ? this.observations : this.observations.filter(obs => obs.status === status);
  // }
  getObservationsByStatus(statuses: ('All' | 'draft' | 'completed' | 'started')[]) {
    if (!this.observations) {
      return []; // or handle the case as appropriate
    }
    return statuses.includes('All')
      ? this.observations
      : this.observations.filter(obs => statuses.includes(obs.status));
  }

  getObservationByEntityId() {

    this.apiService.post(urlConfig.observation.observationSubmissions + this.observationId + `?entityId=${this.entityId}`, this.apiService.profileData)
      // this.apiService.post(urlConfig.observation.observationSubmissions + "672b087572f4ef94700087c9" + `?entityId=663c60bbe4d0a4cced6b6399`, this.apiService.profileData)

      .subscribe((res: any) => {


        if(this.count == 1 && res?.result?.length == 0){
          this.count++;
          this.observeAgain();
        }else{
        this.observations = res.result;

        }

        // if (res.result) {
        //   this.observations = res.result;
        //   // this.filteredEntities = [...this.selectedEntities.entities]

        // } else {
        //   this.toaster.showToast(res.message, 'danger');
        // }
      })
  }

  navigateToDetails(data) {
    console.log('routes', data);
    // if (data?.evidencesStatus?.length == 0) {
    //   this.toaster.showToast("No solution found.", 'Close')


    // } else 
    if (data?.isRubricDriven) {
      // this.dataService.setData(data?.evidencesStatus);

      this.router.navigate(['observation'], {
        queryParams: { type: 'domain', observationId: data?.observationId, entityId: data.entityId, id:data?._id }
      });
    } else {
      this.router.navigate(['observation'], {
        queryParams: { type: 'questionnairePlayer', observationId: data?.observationId }
      });
    }
  }



  editEntity(entity: any, id: any) {
    console.log("Edit", entity);
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
              console.log('deleteEntities', res);
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
    console.log("this.observationName", this.observationName);
    const payload = {
      title: this.observationName
    }
    this.apiService.post(urlConfig.observation.update + id, payload)

      .subscribe((res: any) => {

        if (res.status == 200) {
          console.log('updateEntities', res);
          this.getObservationByEntityId();
        } else {
          this.toaster.showToast(res.message, 'Close');
        }
      }, (err: any) => {
        this.toaster.showToast(err.error.message, 'Close');
      })

  }

  observeAgain() {
    console.log("this.observeAgain");
    // this.apiService.post(urlConfig.observation.create + "672b087572f4ef94700087c9" + `?entityId=663c60bbe4d0a4cced6b6399`, {})
    this.apiService.post(urlConfig.observation.create + this.observationId + `?entityId=${this.entityId}`, {})


      .subscribe((res: any) => {

        console.log('create', res);
        this.getObservationByEntityId();

        // if (res.result) {
        //   this.observations = res.result;
        //   // this.filteredEntities = [...this.selectedEntities.entities]

        // } else {
        //   this.toaster.showToast(res.message, 'danger');
        // }
      })
  }

  viewReport() {
    console.log("this.viewReport");
  }




}
