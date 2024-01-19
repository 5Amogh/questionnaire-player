import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { Observable } from 'rxjs/internal/Observable';
import {types , limit} from '../../constants/file-formats.json';

@Component({
  selector: 'lib-attachment',
  templateUrl: './attachment.component.html',
  styleUrls: ['./attachment.component.scss'],
})
export class AttachmentComponent implements OnChanges {
  @Input() data;
  @Input() fileSizeLimit: number = limit;
  @Input() questionId;
  formData;
  objectURL: string;
  formats = types;
  @ViewChild('previewModal') previewModal: TemplateRef<any>;
  @Input() fileUploadResponse = null;
  objectType: string;
  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileUploadResponse'] && !changes['fileUploadResponse'].firstChange && this.fileUploadResponse?.status) {
      const status = this.fileUploadResponse?.status;
      const successMessage = 'Evidence upload successfully!';
      const failureMessage = 'Unable to upload the file. Please try again.';
      const alertDialogConfig = {
        message: status === 200 ? successMessage : failureMessage,
        acceptLabel: 'Ok',
        cancelLabel: null,
      };
  
      if (status == 200) {
        this.data.files.push(this.fileUploadResponse.data);
      }
        this.openAlert(alertDialogConfig);
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
      const fileType = this.getFileType(fileName); // Get file type based on extension
      const fileDetails = {
        name: fileName,
        type: fileType,
        question_id: this.questionId,
        submissionId: this.data.submissionId,
        file: files[index], // Store the File object for later use
      };
      parent.postMessage(fileDetails);
    });
  }

  filesTrackBy(index,file){
    return file.url;
  }
  getFileType(fileName) {
    const type = fileName.split('.').pop();
    for(const key of Object.keys(this.formats)){
      if(this.formats[key].includes(type)){
        return key;
      }
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  showFilePreview(url: any, type: string) {
    this.objectURL = url;
    this.objectType = type;
    this.dialog.open(this.previewModal, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
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
