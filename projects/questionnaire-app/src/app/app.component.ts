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
  fileUploadResponse: any = null;
  apiConfig = {};
  saveQuestioner:boolean = false;
  constructor(public fb: FormBuilder, public http: HttpClient) {}

  ngOnInit() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
    this.assessment = mockData;
    this.apiConfig ={
      baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
      userAuthToken:'',
      solutionId:'66cc1fd6933415620e0cebe9',
      solutionType:'survey'
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


  ngOnDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  }
}
