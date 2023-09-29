import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef:MatDialogRef<AlertComponent> ) {}

  acceptDialog() {
    this.dialogRef.close(true);
  }
  rejectDialog() {
    this.dialogRef.close(false)
  }
}
