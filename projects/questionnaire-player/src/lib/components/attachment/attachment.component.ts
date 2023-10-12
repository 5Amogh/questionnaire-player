import { Component, Input } from '@angular/core';
import { AlertMeta } from '../../interfaces/alert.type';
import { UtilsService } from '../../services/utils.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'lib-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent {
  @Input() data;
  @Input() fileSizeLimit: number = 50;
  formData;
  constructor(private utils: UtilsService, private dialog: MatDialog) {}

  selectedFiles = [];

  basicUpload(event) {
    const files: FileList = event.target.files;
    let sizeMB = +(files[0].size / 1000 / 1000).toFixed(4);
    if (sizeMB > this.fileSizeLimit) {
      this.fileLimitCross();
      return;
    }
    this.formData = new FormData();
    Array.from(files).forEach((f) => this.formData.append('file', f));
    event.target.value = null;
    this.selectedFiles.push(this.getFileNames(this.formData)[0]);
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

  openAlert(alertDialogConfig) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: alertDialogConfig,
      width: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
    });
    let userAcceptance;
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      userAcceptance = res;
    });
    return userAcceptance;
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

  extension(name) {
    return name.split('.').pop();
  }
  openFile(file) {
    window.open(file.url, '_blank');
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
}
