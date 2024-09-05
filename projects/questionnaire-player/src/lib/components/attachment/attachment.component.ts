import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { Observable } from 'rxjs/internal/Observable';
import { types, limit } from '../../constants/file-formats.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import * as urlConfig from '../../constants/url-config.json';
import { catchError } from 'rxjs/operators';
import { PrivacyPopupComponent } from '../privacy-popup/privacy-popup.component';
import { ToastService } from '../../services/toast.service';
@Component({
  selector: 'lib-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent {
  @Input() data;
  @Input() fileSizeLimit: number = limit;
  @Input() questionId;
  formData;
  objectURL: string;
  formats = types;
  @ViewChild('previewModal') previewModal: TemplateRef<any>;
  @ViewChild('fileInput') fileInput: ElementRef;
  fileUploadResponse = null;
  objectType: string;
  docPreviewAlertRef: any;
  dialogRef: any;
  @Input() questionFile;
  public isConsentGiven = false;
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private apiService: ApiService,
    public toastService: ToastService
  ) {}

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const inputElement = document.getElementById(
        `${this.questionId}`
      ) as HTMLElement;
      inputElement.click();
    }
  }

  basicUpload(event) {
    const files: FileList = event.target.files;
    let sizeMB = +(files[0].size / 1000 / 1000).toFixed(4);
    if (sizeMB > this.fileSizeLimit) {
      this.fileLimitCross();
      return;
    }
    this.formData = new FormData();
    Array.from(files).forEach((f) => this.formData.append('file', f));
    const fileNames = this.getFileNames(this.formData);
    fileNames.map((fileName, index) => {
      const fileType = this.getFileType(fileName);
      if (!fileType || fileType == undefined) {
        const alertDialogConfig = {
          title: null,
          message: `Invalid file format.`,
          acceptLabel: 'Ok',
          cancelLabel: null,
        };
        this.openAlert(alertDialogConfig);
        return;
      } else {
        const fileDetails = {
          name: fileName,
          type: fileType,
          question_id: this.questionId,
          submissionId: this.data.submissionId,
          file: files[index],
        };
        const alertDialogConfig = {
          title: null,
          message: `File Uploading Please Wait...`,
          acceptLabel: null,
          cancelLabel: null,
        };
        this.openAlert(alertDialogConfig);
        this.fileUpload(fileDetails);
      }
    });
    event.target.value = '';
  }

  fileUpload(data) {
    let payload: any = {};
    payload['ref'] = 'survey';
    payload['request'] = {};
    const submissionId = data.submissionId;
    payload['request'][submissionId] = {
      files: [data.name],
    };
    this.apiService
      .post(urlConfig.presignedUrl, payload)
      .pipe(
        catchError((err: any) => {
          console.error('Unable to upload the file. Please try again', err);
          this.fileUploadResponse = {
            status: 400,
            data: null,
            question_id: data.question_id,
          };
          throw Error(err);
        })
      )
      .subscribe((response: any) => {
        const presignedUrlData = response['result'][submissionId].files[0];
        const headers = new HttpHeaders({
          'Content-Type': 'multipart/form-data',
        });
        this.http
          .put(`${presignedUrlData.url}`, data.file, { headers })
          .pipe(
            catchError((err) => {
              console.error('Unable to upload the file. Please try again');
              this.fileUploadResponse = {
                status: 400,
                data: null,
                question_id: data.question_id,
              };
              throw Error(err);
            })
          )
          .subscribe((cloudResponse: any) => {
            const obj: any = {
              name: data.name,
              url: `${presignedUrlData.url}`.split('?')[0],
              previewUrl: presignedUrlData.getDownloadableUrl[0],
            };
            for (const key of Object.keys(presignedUrlData.payload)) {
              obj[key] = presignedUrlData['payload'][key];
            }
            this.fileUploadResponse = {
              status: 200,
              data: obj,
              question_id: data.question_id,
            };
            this.closeDialog();
            const alertDialogConfig = {
              message: 'File uploaded successfully!',
              acceptLabel: 'Ok',
              cancelLabel: null,
            };
            this.data.files.push(this.fileUploadResponse.data);
            this.openAlert(alertDialogConfig);
          });
      });
  }

  filesTrackBy(index, file) {
    return file.url;
  }
  getFileType(fileName) {
    const type = fileName.split('.').pop();
    for (const key of Object.keys(this.formats)) {
      if (this.formats[key].includes(type.toLowerCase())) {
        return key;
      }
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  async showFilePreview(url: any, type: string) {
    this.objectURL = url;
    this.objectType = type;
    this.dialogRef = this.dialog.open(this.previewModal, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
    });
    if (this.objectType == 'doc') {
      const alertDialogConfig = {
        title: null,
        message: `Please wait it may take up to a minute to load`,
        acceptLabel: 'Close Preview',
        cancelLabel: null,
      };
      this.openAlert(alertDialogConfig, true);
    }
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

  fileLimitCross() {
    const alertDialogConfig = {
      title: null,
      message: `The file is too large and cannot be uploaded. The file you are trying to upload has exceeded the maximum file size ${this.fileSizeLimit} MB`,
      acceptLabel: 'Ok',
      cancelLabel: null,
    };

    this.openAlert(alertDialogConfig);
  }

  async openAlert(alertDialogConfig, msgAlertForDoc?) {
    const dialogRef = await this.dialog.open(AlertComponent, {
      data: alertDialogConfig,
      width: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
      disableClose: true,
    });

    if (msgAlertForDoc) {
      this.docPreviewAlertRef = dialogRef;
    } else {
      this.dialogRef = dialogRef;
    }

    return new Observable<boolean>((observer) => {
      dialogRef.afterClosed().subscribe((res) => {
        if (res) {
          this.closeDialog();
        }
        observer.next(res);
        observer.complete();
      });
    }).toPromise();
  }

  getFileNames(formData) {
    let files = [];
    formData.forEach((element) => {
      files.push(element.name);
    });
    return files;
  }

  async deleteAttachment(fileIndex?) {
    const alertDialogConfig = {
      message: 'Do you want to delete the file?',
      acceptLabel: 'Yes',
      cancelLabel: 'No',
    };
    const accepted = await this.openAlert(alertDialogConfig);
    if (!accepted) {
      return;
    }
    this.data.files.splice(fileIndex, 1);
  }
  async handleFileUpload(questionId: string) {
    try {
      const data = await this.showPrivacyPolicyPopup().toPromise();
      if(data){
        if (data.isChecked && data.upload) {
          this.isConsentGiven = true;
          this.questionId = questionId;
  
          const fileInputElement = document.getElementById(
            questionId
          ) as HTMLInputElement;
          if (fileInputElement) {
            fileInputElement.click();
          }
        } else{
          this.toastService.showToast(
            'Evidence not uploaded. Please click on attach and accept the content policy terms.',
            'danger'
          );
        }
      }
   
    } catch (error) {
      console.error('Error handling file upload:', error);
      this.toastService.showToast(
        'An error occurred. Please try again.',
        'danger'
      );
    }
  }

  onFileSelected(event: Event) {
    if (this.isConsentGiven) {
      this.basicUpload(event);
      this.isConsentGiven = false;
    } else {
      this.toastService.showToast(
        'Please accept the terms before uploading.',
        'danger'
      );
    }
  }

  showPrivacyPolicyPopup(): Observable<any> {
    const dialogRef = this.dialog.open(PrivacyPopupComponent, {
      width: '400px',
      minHeight: '150px',
    });

    return dialogRef.afterClosed();
  }

  docLoader() {
    this.docPreviewAlertRef.close();
  }
}
