import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showToast(message: string, type: string = 'default', duration: number = 3000, verticalPosition: any = 'top', horizontalPosition: any = 'center') {
    let styleClass = type;
    let snackBarConfig : MatSnackBarConfig= {
      duration: duration,
      verticalPosition: verticalPosition,
      horizontalPosition: horizontalPosition,
      panelClass: [styleClass]
    };
    this.snackBar.open(message, '', snackBarConfig);
  }
}
