import { LocationStrategy } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @ViewChild('modal') modal: TemplateRef<any>;
  @Input() isDimmed;
  @Input() hint;
  @Output() closeHintEmitter = new EventEmitter();
  hintCloseText: string;
  @Input() hintModalNote;
  constructor(
    public location:LocationStrategy,
    public dialog: MatDialog
  ) {
    this.location.onPopState(()=>{
      this.isDimmed = false;
      this.closeHintEmitter.emit({})
    })
   }

  ngOnInit(){
    this.hintCloseText = 'Close';
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
   this.dialog.open(this.modal, {
      width: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  closeHint(){
    this.isDimmed = false;
    this.closeHintEmitter.emit()
  }

}
