import { Injectable } from '@angular/core';
import urlConfig from '../config/url.config.json';
import { ApiBaseService } from './api-base.service';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  authorization:any;
  accessToken:any;
  submissionId:any;
  assessmentResult:any;
  private authToken: string = '';
  private userToken:string = '';

  constructor(
    public baseApiService : ApiBaseService
   ) { }


   setAuthToken(authToken: string, userToken:string): void {
     this.authToken = authToken;
     this.userToken = userToken
   }
 
   getAuthToken(): string {
    let tokens:any = {
      authToken :this.authToken,
     userToken :this.userToken
    }
     return tokens;
   }

  fetchDetails(solutionId): Observable<any> {

    // this.headers = new HttpHeaders({
      // Authorization: `Bearer ${this.authorization}` as string,
      // 'X-authenticated-user-token': this.accessToken,
    // });

    // this.showSpinner = true;
    // let entityId= '123'
    // let payload: any = {
    //   course: entityId
    // };
     this.baseApiService
      .post(urlConfig.survey.detailsURL + `?solutionId=${solutionId}`,{}
        // this.headers
      )
      .pipe(
        catchError((err) => {
          // this.errorDialog();
          throw new Error('Could not fetch the details');
        })
      )
      .subscribe((res: any) => {
        if (res?.result) {
          // this.assessmentResult = res.result;
        } else if (!res.result) {
          // this.redirectionFun(res.message);
        } else {
          // this.errorDialog();
        }
        // this.showSpinner = false;
      });
      return this.assessmentResult;
  }

  async submitOrSaveEvent(event: any) {
    const evidenceData = { ...event.detail.data, status: event.detail.status };
    if (event?.detail?.status == 'submit') {
      const confirmationParams = {
        title: 'Confirmation',
        // message: `Are you sure you want to submit ${this.config.type}? <br> ${this.config.type} can be submitted only once and becomes uneditable after submission.`,
        timer: 'fasle',
        actionBtns: true,
        btnLeftLabel: 'Cancel',
        btnRightLabel: 'Confirm',
      };
      // const response = await this.openConfirmationDialog(confirmationParams);
      // if (!response) {
      //   return;
      // }
    }
    // this.showSpinner = true;
    this.baseApiService
      .post(
        urlConfig.survey.updateURL + this.submissionId,
        {
          evidence: evidenceData,
        },
        // this.headers
      )
      .pipe(
        catchError((err) => {
          // this.errorDialog();
          // if (this.deviceType == 'mobile') {
          //   window.parent.postMessage(
          //     JSON.stringify({
          //       status: 400,
          //       message: `Error while submission`,
          //     })
          //   );
          // }
          throw new Error(`Update api has failed`);
        })
      )
      .subscribe(async (res: any) => {
        // this.showSpinner = false;
        let responses = false;
        if (event?.detail?.status == 'draft') {
          const confirmationParams = {
            title: 'Success',
            // message: `Successfully your ${this.config.type} has been saved. Do you want to continue?`,
            timer: false,
            actionBtns: true,
            btnLeftLabel: 'Later',
            btnRightLabel: 'Continue',
          };
          // responses = await this.openConfirmationDialog(confirmationParams);
        }
        let msgRes = event?.detail?.status == 'draft' ? 'saved, please complete the survey as soon as possible' : 'submitted';

        if (!responses) {
            window.parent.postMessage(
              JSON.stringify({
                status: 200,
                // message: `${this.config.type} has been submitted successfully`,
              })
            );

            // this.redirectionFun(
            //   `Thank you, your ${this.config.type} has been ${msgRes}.`
            // );
          }
          
      });
  }

  receiveFileUploadMessage(event: any) {
    if (event.data.question_id) {
      const formData = new FormData();
      formData.append('file', event.data.file);
      let payload: any = {};
      payload['ref'] = 'survey';
      payload['request'] = {};
      const submissionId = event.data.submissionId;
      payload['request'][submissionId] = {
        files: [event.data.name],
      };
      this.baseApiService
        .post(
          urlConfig.survey.presignedURL,
          payload,
          // this.headers
        )
        .pipe(
          catchError((err) => {
            // this.fileUploadResponse = {
            //   status: 400,
            //   data: null,
            //   question_id: event.data.question_id,
            // };
            throw new Error('Unable to upload the file. Please try again');
          })
        )
        .subscribe((response: any) => {
          const presignedUrlData = response['result'][submissionId].files[0];
          const uploadURL = presignedUrlData.url.replace('/api/','/apis/proxies/v8/')

          this.baseApiService
            .postWithFullURL(uploadURL, formData,
              //  this.headers
              )
            .pipe(
              catchError((err) => {
                // this.fileUploadResponse = {
                //   status: 400,
                //   data: null,
                //   question_id: event.data.question_id,
                // };
                throw new Error('Unable to upload the file. Please try again');
              })
            )
            .subscribe((cloudResponse: any) => {
   

              const previewURL = presignedUrlData.downloadableUrl.split('?')[0]
              const obj: any = {
                name: event.data.name,
                url: presignedUrlData.url.split('?')[0],
                previewUrl:previewURL.replace(window['env' as any]['storageURL' as any],`${window['env' as any]['baseURL' as any]}/content-store`),
              };
              console.log('obj',obj);
              for (const key of Object.keys(presignedUrlData.payload)) {
                obj[key] = presignedUrlData['payload'][key];
              }
              // this.fileUploadResponse = {
              //   status: 200,
              //   data: obj,
              //   question_id: event.data.question_id,
              // };
            });
        });
    }
  }
}
