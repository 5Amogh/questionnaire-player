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
    this.solutionId = '66ab5e1dab238a8b8a8df9da';
    this.apiConfig={
      baseURL:'https://dev.elevate-apis.shikshalokam.org',
      bearerToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxNTgsIm5hbWUiOiJBZGl0aHlhIiwic2Vzc2lvbl9pZCI6MzI0Mywib3JnYW5pemF0aW9uX2lkIjoxNywicm9sZXMiOlt7ImlkIjoyLCJ0aXRsZSI6Im1lbnRvciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoxLCJ2aXNpYmlsaXR5IjoiUFVCTElDIn0seyJpZCI6NSwidGl0bGUiOiJvcmdfYWRtaW4iLCJ1c2VyX3R5cGUiOjEsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MSwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjYsInRpdGxlIjoic2Vzc2lvbl9tYW5hZ2VyIiwidXNlcl90eXBlIjowLCJzdGF0dXMiOiJBQ1RJVkUiLCJvcmdhbml6YXRpb25faWQiOjEsInZpc2liaWxpdHkiOiJQVUJMSUMifV19LCJpYXQiOjE3MjI1OTYyOTEsImV4cCI6MTcyMjU5ODA5MX0.hnWIkNw4V8BFGWOC7lUz4mWOA6eLydf2XA71sHzT6',
      userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxNTgsIm5hbWUiOiJBZGl0aHlhIiwic2Vzc2lvbl9pZCI6MzI0Mywib3JnYW5pemF0aW9uX2lkIjoxNywicm9sZXMiOlt7ImlkIjoyLCJ0aXRsZSI6Im1lbnRvciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoxLCJ2aXNpYmlsaXR5IjoiUFVCTElDIn0seyJpZCI6NSwidGl0bGUiOiJvcmdfYWRtaW4iLCJ1c2VyX3R5cGUiOjEsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MSwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjYsInRpdGxlIjoic2Vzc2lvbl9tYW5hZ2VyIiwidXNlcl90eXBlIjowLCJzdGF0dXMiOiJBQ1RJVkUiLCJvcmdhbml6YXRpb25faWQiOjEsInZpc2liaWxpdHkiOiJQVUJMSUMifV19LCJpYXQiOjE3MjI1OTYyOTEsImV4cCI6MTcyMjU5ODA5MX0.hnWIkNw4V8BFGWOC7lUz4mWOA6eLydf2XA71sHzT6Zc'
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
