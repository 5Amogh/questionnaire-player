import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { catchError } from 'rxjs/operators';
import * as mockData from './assesmentInfo.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  sections!: any[];
  assessment!: any;
  solutionId!:any;
  fileUploadResponse: any = null;
  apiConfig!:any;
  constructor(public fb: FormBuilder, public http: HttpClient) {}

  ngOnInit() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
    this.assessment = mockData;
    this.solutionId = '65e01aeffa030d00078645b6';
    this.apiConfig={
      baseURL:'',
      bearerToken:'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJwMTRYR1lrdHAxUnNScEZZeXZGTnZuekUxVDBMT3hVSHBoNnhHSzUxdGhvIn0.eyJqdGkiOiI0ZGE3MDRjMi04NTMzLTQ5ODktOTIwMy02MWU3MWJlMTBjNjkiLCJleHAiOjE3MjI0NzA4MDMsIm5iZiI6MCwiaWF0IjoxNzIyNDI3NjAzLCJpc3MiOiJodHRwczovL3BvcnRhbC5rYXJtYXlvZ2kubmljLmluL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJzdWIiOiJmOmJhYWRhOGIxLWU2MmUtNDRjNC1hMTRkLTY3MDJlYTkwZjQ5Njo2Nzc4Y2MyYi04MDc1LTQ5YTQtOWU3ZC1kZWFmYTRkMGQ5ZWYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiIyNDRkOWE2OC1lZGNmLTRjZmMtYWM3Ni1iNmJjMzNjYjg2N2MiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInNjb3BlIjoiIiwibmFtZSI6IlRlc3QgQWRtaW4gUHJlcHJvZCBFbnYgIiwicHJlZmVycmVkX3VzZXJuYW1lIjoicHJvZG1kb2FkbWluXzZ4NGwiLCJnaXZlbl9uYW1lIjoiVGVzdCBBZG1pbiBQcmVwcm9kIEVudiAiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoicHIqKioqKioqKioqKipAeW9wbWFpbC5jb20ifQ.BA769tjX4xZ34GD_v2q2vo71gqebV2ZSbfTa8MNUZFql2yKqwwxK6A-V0-YxA7cSlj_1zLV2Hvx4uHZb94_NpPbbyYjlKPH3ZjW0ZuVTIT7bhegnFTAf4EfmooLYMpZSx__-qarwU1q3Xk64YqLyKVSxIf2CT9-NvEFfwfWhAbDAxwWaP7voUB_zDJAI6sNZIdOmvPXVf6Zuf3RhsRVe08TAxvloJGGrs6ltNlsQh7ZQfEArez__WO-A2bpsOxa8DwbuM5yZVVXwLEwaqk-Y6NBDcxvIVjMqX99QXWf8DAc0utPhfGxZzxFh4x5dN_8Nhn4g1csPM8Lk6un82Skxag',
      userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI0Mzg1ZDViYi0zYmMzLTQzMTQtYWI5NS05MzA2MmQwMTQ3ZTAifQ.eyJqdGkiOiI0Nzk1YTIyNi04NmRmLTQ5NmYtOGZkNC05NmYxYmU1NTljN2YiLCJleHAiOjE3MjI1MTQwMDMsIm5iZiI6MCwiaWF0IjoxNzIyNDI3NjAzLCJpc3MiOiJodHRwczovL3BvcnRhbC5rYXJtYXlvZ2kubmljLmluL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJhdWQiOiJodHRwczovL3BvcnRhbC5rYXJtYXlvZ2kubmljLmluL2F1dGgvcmVhbG1zL3N1bmJpcmQiLCJzdWIiOiJmOmJhYWRhOGIxLWU2MmUtNDRjNC1hMTRkLTY3MDJlYTkwZjQ5Njo2Nzc4Y2MyYi04MDc1LTQ5YTQtOWU3ZC1kZWFmYTRkMGQ5ZWYiLCJ0eXAiOiJSZWZyZXNoIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiMjQ0ZDlhNjgtZWRjZi00Y2ZjLWFjNzYtYjZiYzMzY2I4NjdjIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInNjb3BlIjoiIn0.DbcdV1MMDsZJXnyTiCrW0eQD1UzvwotOk6hVpOUuCXw'
    }
  }

  receiveMessage(event) {
    if (event.data.question_id) {
      const formData = new FormData();
      formData.append('file', event.data.file);
      let payload = {};
      payload['ref'] = 'survey';
      payload['request'] = {};
      const submissionId = event.data.submissionId;
      payload['request'][submissionId] = {
        files: [event.data.name],
      };
      // this.http
      //   .post('xxxx-url/preSignedUrls',
      //     payload,
      //     {
            
      //       headers: {
      //         "Content-Type":"application/json",
      //         "Authorization":'Bearer xxxx',
      //         'X-authenticated-user-token':'xxxx'
      //         },
      //     }
      //   )
      //   .pipe(
      //     catchError((err) => {
      //       this.fileUploadResponse = {status:400, data:null, question_id:event.data.question_id};
      //       throw new Error('Unable to upload the file. Please try again', err);
      //     })
      //   )
      //   .subscribe((response) => {
      //     console.log(response);
      //     const presignedUrlData = response['result'][submissionId].files[0];
      //     formData.append('url', presignedUrlData.url);
      //     console.log(formData);
      //     this.http
      //       .put('xxxx-url', formData, {
      //         headers: {
      //           Authorization:
      //             'Bearer xxxx',
      //           'X-authenticated-user-token':'xxxx'              },
      //       })
      //       .pipe(
      //         catchError((err) => {
      //           this.fileUploadResponse = {status:400, data:null, question_id:event.data.question_id};
      //           throw new Error(
      //             'Unable to upload the file. Please try again',
      //             err
      //           );
      //         })
      //       )
      //       .subscribe((cloudResponse: any) => {
      //         if (cloudResponse?.status == 200) {
      //           const obj = {
      //             name: event.data.name,
      //             url: presignedUrlData.url.split('?')[0],
      //           };
      //           for (const key of Object.keys(presignedUrlData.payload)) {
      //             obj[key] = presignedUrlData['payload'][key];
      //           }
      //           this.fileUploadResponse = {status:200, data:obj, question_id:event.data.question_id};
      //         }
      //       });


      //   });

        const obj = {
          name: event.data.name,
          url: URL.createObjectURL(event.data.file)
        };
        this.fileUploadResponse = {status:200, data:obj, question_id:event.data.question_id};
    }
  }

  submitOrSaveEvent(event) {
    console.log('Event emitted inside the app', event.detail);
  }
  ngOnDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  }
}
