import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snackBar: MatSnackBar) { }

  showToast(message:string,type?:string,duration?:number,verticalPosition?:any,horizontalPosition?:any){
    let styleClass = type ? type : "default"
    let snackBarConfig = {
      duration: duration ? duration : 3000,
      verticalPosition: verticalPosition ? verticalPosition : 'top',
      horizontalPosition: horizontalPosition ? horizontalPosition : "center",
      panelClass: [styleClass]
    }
    this.snackBar.open(message,'',snackBarConfig)
  }
}