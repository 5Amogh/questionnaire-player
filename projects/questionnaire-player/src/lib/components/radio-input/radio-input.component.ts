import { Output, TemplateRef, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Question } from '../../interfaces/questionnaire.type';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'lib-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.scss'],
})
export class RadioInputComponent implements OnInit {
  @Input() options: any;
  @Input() questionnaireForm: FormGroup;
  @Input() question: Question;
  hintCloseText: string;
  hintModalNote: string;
  @Output() dependentParent = new EventEmitter<Question>();
  @ViewChild(DialogComponent) childDialogComponent: DialogComponent;
  isDimmed: any;
  hint: any;
  constructor() { }

  ngOnInit() {
    this.hintCloseText = 'Close';
    this.hintModalNote = 'Note of the modal hint';
    setTimeout(() => {
      this.questionnaireForm.addControl(
        this.question._id,
        new FormControl(
          this.question.value || null,
          // this.qService.validate(this.question)
        )
      );

      this.question.startTime = this.question.startTime
        ? this.question.startTime
        : Date.now();
      if (this.question.value) {
        if (this.question.children.length) {
          this.dependentParent.emit(this.question);
        }
      }
    });
  }

  openDialog(optionIndex: number) {
    this.isDimmed = !this.isDimmed;
    this.hint = this.options[optionIndex]?.hint
    this.childDialogComponent.openDialog('300ms', '150ms');
  }

  get isValid(): boolean {
    return this.questionnaireForm.controls[this.question._id].valid;
  }

  get isTouched(): boolean {
    return this.questionnaireForm.controls[this.question._id].touched;
  }

  onChange(value) {
    this.questionnaireForm.controls[this.question._id].setValue(value);
    this.question.value = value;
    this.question.endTime = Date.now();
    if (this.question.children.length) {
      this.dependentParent.emit(this.question);
    }
  }

  closeHint() {
    this.isDimmed = false;
  }
}
