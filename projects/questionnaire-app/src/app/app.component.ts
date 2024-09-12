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
  apiConfig = {}
  constructor(public fb: FormBuilder, public http: HttpClient) {}

  ngOnInit() {
    window.addEventListener('message', this.receiveMessage.bind(this), false);
    this.assessment = mockData;
    this.apiConfig ={
      baseURL:'https://survey-dev.elevate-apis.shikshalokam.org',
      userAuthToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxNjIsIm5hbWUiOiJBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkFCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0FCQ0NBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkNBQkMiLCJzZXNzaW9uX2lkIjo2OTc3LCJvcmdhbml6YXRpb25faWQiOjI0LCJyb2xlcyI6W3siaWQiOjMsInRpdGxlIjoibWVudGVlIiwibGFiZWwiOiJNZW50ZWUiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MSwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjQsInRpdGxlIjoiYWRtaW4iLCJsYWJlbCI6IkFkbWluIiwidXNlcl90eXBlIjoxLCJzdGF0dXMiOiJBQ1RJVkUiLCJvcmdhbml6YXRpb25faWQiOjEsInZpc2liaWxpdHkiOiJQVUJMSUMifSx7ImlkIjo4LCJ0aXRsZSI6InB1YmxpYyIsImxhYmVsIjoiUHVibGljIiwidXNlcl90eXBlIjowLCJzdGF0dXMiOiJBQ1RJVkUiLCJvcmdhbml6YXRpb25faWQiOjEsInZpc2liaWxpdHkiOiJQVUJMSUMifSx7ImlkIjo1LCJ0aXRsZSI6Im9yZ19hZG1pbiIsImxhYmVsIjoiT3JnIEFkbWluIiwidXNlcl90eXBlIjoxLCJzdGF0dXMiOiJBQ1RJVkUiLCJvcmdhbml6YXRpb25faWQiOjEsInZpc2liaWxpdHkiOiJQVUJMSUMifSx7ImlkIjoxMCwidGl0bGUiOiJyZXZpZXdlciIsImxhYmVsIjoiUmV2aWV3ZXIiLCJ1c2VyX3R5cGUiOjAsInN0YXR1cyI6IkFDVElWRSIsIm9yZ2FuaXphdGlvbl9pZCI6MSwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjE4LCJ0aXRsZSI6ImJsb2NrX2VkdWNhdGlvbl9vZmZpY2VyIiwibGFiZWwiOiJCbG9jayBFZHVjYXRpb24gT2ZmaWNlciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjE5LCJ0aXRsZSI6ImJsb2NrX2FjYWRlbWljX2Nvb3JkaW5hdG9yIiwibGFiZWwiOiJCbG9jayBBY2FkZW1pYyBDb29yZGluYXRvciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9LHsiaWQiOjIwLCJ0aXRsZSI6ImRpc3RyaWN0X2VkdWNhdGlvbl9vZmZpY2VyIiwibGFiZWwiOiJEaXN0cmljdCBFZHVjYXRpb24gT2ZmaWNlciIsInVzZXJfdHlwZSI6MCwic3RhdHVzIjoiQUNUSVZFIiwib3JnYW5pemF0aW9uX2lkIjoyNCwidmlzaWJpbGl0eSI6IlBVQkxJQyJ9XX0sImlhdCI6MTcyNTk0ODE3MSwiZXhwIjoxNzI2MDM0NTcxfQ.CpMybMuF6dXbn0vWBaVVOtTlNTU8v9eevZas580maF8',
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

  submitOrSaveEvent(event) {
    console.log('Event emitted inside the app', event.detail);
  }
  ngOnDestroy() {
    window.removeEventListener('message', this.receiveMessage);
  }
}
