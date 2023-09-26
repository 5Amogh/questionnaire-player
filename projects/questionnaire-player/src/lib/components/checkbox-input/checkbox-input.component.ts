import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Question } from '../../interfaces/questionnaire.type';

@Component({
  selector: 'lib-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css'],
})
export class CheckboxInputComponent implements OnInit {
  @Input() options;
  @Input() questionnaireForm: FormGroup;
  @Input() question: Question;
  hintCloseText: string;
  hintModalNote:string
  @Output() dependentParent = new EventEmitter<Question>();
  isDimmed: any;
  hint: any;
  constructor() {}

  ngOnInit() {
    this.hintCloseText = 'Close';
    this.hintModalNote = 'This is a modal hint';
    setTimeout(() => {
      const optionControl = this.options.map((v) => {
        if (
          this.question.value &&
          (this.question.value as Array<string>).find((_v) => _v == v.value)
        ) {
          return new FormControl(v.value);
        }
        return new FormControl('');
      });

      this.questionnaireForm.addControl(
        this.question._id,
        new FormArray(optionControl)
        // this.qService.validate(this.question)
      );

      this.question.startTime = this.question.startTime
        ? this.question.startTime
        : Date.now();
      if (this.question.value.length) {
        if (this.question.children.length) {
          this.dependentParent.emit(this.question);
        }
      }
    });
  }

  onChange(oId: string, isChecked: boolean, oIndex: number) {
    const formArray: FormArray = this.questionnaireForm.get(
      this.question._id
    ) as FormArray;
    if (isChecked) {
      formArray.controls[oIndex].patchValue(oId);
    }
    this.question.value =
      this.questionnaireForm.controls[this.question._id].value;
    this.question.value = (this.question.value as Array<string>).filter(
      Boolean
    );
    this.question.endTime = Date.now();
    if (this.question.children.length) {
      this.dependentParent.emit(this.question);
    }
  }

  get isValid(): boolean {
    return this.questionnaireForm.controls[this.question._id].valid;
  }

  get isTouched(): boolean {
    return this.questionnaireForm.controls[this.question._id].touched;
  }

  closeHint(){
    this.isDimmed = false;
  }
}
