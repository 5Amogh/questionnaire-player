import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'lib-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent implements OnDestroy, OnInit {
  @Input() data;
  @Input() fileSizeLimit: number = 50;
  formData;
  objectURL: string;
  @ViewChild('previewModal') previewModal: TemplateRef<any>;
  objectType: string;
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    console.log('Component initialized with data:', this.data);
  }

  basicUpload(event) {
    const files: FileList = event.target.files;
    console.log(files);
    let sizeMB = +(files[0].size / 1000 / 1000).toFixed(4);
    if (sizeMB > this.fileSizeLimit) {
      this.fileLimitCross();
      return;
    }
    this.formData = new FormData();
    Array.from(files).forEach((f) => this.formData.append('file', f));
    const fileNames = this.getFileNames(this.formData);
    console.log('fileNames', fileNames);
    fileNames.map((fileName, index) => {
      console.log('fileName', fileName);
      const fileType = this.getFileType(fileName); // Get file type based on extension
      const fileDetails = {
        name: fileName,
        type: fileType,
        file: files[index], // Store the File object for later use
      };
      this.data.files.push(fileDetails);
    });
    console.log(this.data);
  }
  getFileType(fileName) {
    const type = fileName.split('.').pop();
    if (['png', 'image/png', 'jpg', 'jpeg', 'image/jpg', 'image/jpeg'].includes(type)) {
      return 'image';
    } else if (['mp4', 'video/mp4', 'webm', 'mkv', 'video/webm', 'video/mkv', 'avi', 'video/avi',].includes(type)) {
      return 'video';
    } else if (['audio/mp3', 'audio/wav', 'audio/mpeg', 'mpeg', 'wav', 'mp3'].includes(type)) {
      return 'audio';
    } else if (['pdf','application/pdf'].includes(type)) {
      return 'pdf';
    } else {
      return 'doc';
    }
  }

  closeDialog(){
    this.dialog.closeAll();
  }

  showFilePreview(file: File, type: string) {
    const reader = new FileReader();
    reader.onload = () => {
      this.objectURL = URL.createObjectURL(file);
      this.objectType = type;
    };

    reader.readAsDataURL(file);
    const dialogRef = this.dialog.open(this.previewModal, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
    });

    dialogRef.afterClosed().subscribe((_res) => {
      if (this.objectURL) {
        URL.revokeObjectURL(this.objectURL);
        this.objectURL = null;
      }
    });
  }

  fileLimitCross() {
    const alertDialogConfig = {
      title: null,
      message: 'File limit cannot exceed 50 MB',
      acceptLabel: 'Ok',
      cancelLabel: null,
    };

    this.openAlert(alertDialogConfig);
  }

  async openAlert(alertDialogConfig) {
    const dialogRef = await this.dialog.open(AlertComponent, {
      data: alertDialogConfig,
      width: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
    });
    return new Observable<boolean>((observer) => {
      dialogRef.afterClosed().subscribe((res) => {
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

  preSignedUrl(files) {
    let payload = {};
    payload['ref'] = 'survey';
    payload['request'] = {};
    payload['request'][this.data.submissionId] = {
      files: files,
    };
    // this.utils.getPreSingedUrls(payload).subscribe(
    //   (imageData) => {
    //     const presignedUrlData =
    //       imageData['result'][this.data.submissionId].files[0];
    //     this.formData.append('url', presignedUrlData.url);
    //     this.utils.cloudStorageUpload(this.formData).subscribe(
    //       (success: any) => {
    //         if (success.status === 200) {
    //           const obj = {
    //             name: this.getFileNames(this.formData)[0],
    //             url: presignedUrlData.url.split('?')[0],
    //           };
    //           for (const key of Object.keys(presignedUrlData.payload)) {
    //             obj[key] = presignedUrlData['payload'][key];
    //           }
    //           this.data.files.push(obj);
    //           const alertDialogConfig = {
    //             title: null,
    //             message: 'Evidence upload successfully!',
    //             acceptLabel: 'Ok',
    //             cancelLabel: null,
    //           };

    //           this.openAlert(alertDialogConfig);
    //         } else {
    //           this.utils.error('Unable to upload the file. Please try again.');
    //         }
    //       },
    //       (error) => {
    //         this.utils.error('Unable to upload the file. Please try again.');
    //       }
    //     );
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  async deleteAttachment(fileIndex?) {
    const alertDialogConfig = {
      message: 'Do you want to delete the evidence?',
      acceptLabel: 'Yes',
      cancelLabel: 'No',
    };
    const accepted = await this.openAlert(alertDialogConfig);
    if (!accepted) {
      return;
    }
    this.data.files.splice(fileIndex, 1);
  }

  async onAddApproval(file) {
    let html = `
    ${'Evidence content policy'}<a href='/term-of-use.html' target="_blank">${'Evidence content policy'}</a> .${'Evidence content policy'}
    `;
    const alertConfig = {
      message: html,
      acceptLable: 'Upload',
      cancelLable: 'Do not upload',
    };
    let returnData = await this.openAlert(alertConfig);
    if (returnData) {
      file.click();
    } else {
      this.notAccepted();
      return;
    }
  }

  notAccepted(): void {
    const alertConfig = {
      message: 'Terms Rejected',
      acceptLabel: 'Ok',
      cancelLabel: null,
    };
    this.openAlert(alertConfig);
  }

  ngOnDestroy() {
    if (this.objectURL) {
      URL.revokeObjectURL(this.objectURL);
      this.objectURL = null;
    }
  }
}
