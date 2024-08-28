import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-privacy-popup',
  templateUrl: './privacy-popup.component.html',
  styleUrls: ['./privacy-popup.component.css']
})
export class PrivacyPopupComponent {
  isChecked:boolean = false

  constructor(public popupRef: MatDialogRef<PrivacyPopupComponent>, @Inject(MAT_DIALOG_DATA)public data: any){}

  closePopup(data:any){
    let returnData = {
      isChecked: this.isChecked,
      upload: data
    }
    this.popupRef.close(returnData)
  }

}
