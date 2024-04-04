import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Question, Validation } from '../../interfaces/questionnaire.type';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker, MatDatepickerInputEvent, MatDatepickerPanel } from '@angular/material/datepicker';

@Component({
  selector: 'lib-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements OnInit {
  date: any;
  min: Date;
  max: Date;

  @Input() questionnaireForm: FormGroup;
  @Input() question: Question;
  @Input() autoCaptureText: String;
  @ViewChild('picker') datePicker:MatDatepicker<any>;
  @ViewChild('panel') panel:MatDatepickerPanel<any,any>;

  constructor(
    private qService: QuestionnaireService,
    public cd:ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.autoCaptureText = 'Capture';
    setTimeout(() => {
      this.questionnaireForm.addControl(
        this.question._id,
        new FormControl(
          this.question.value ? new Date(this.question.value as string) : null,
          [this.qService.validate(this.question)]
        )
      );

      this.question.startTime = this.question.startTime
        ? this.question.startTime
        : Date.now();
    });
    this.min = (this.question.validation as Validation).min
      ? new Date((this.question.validation as Validation).min)
      : null;
    this.max = (this.question.validation as Validation).max
      ? new Date((this.question.validation as Validation).max)
      : null;
  }

  onChange(event) {
    if(!event.value || !event.value._isValid) return
    this.question.value = this.dateSetting(event.value._d);
    this.questionnaireForm.controls[this.question._id].patchValue(
      this.question.value 
    )
    this.question.endTime = Date.now();;
  }

  dateSetting(date:any){
    const selectedDate = new Date(date);
    const tempDate = new Date();
    selectedDate.setHours(tempDate.getHours());
    selectedDate.setMinutes(tempDate.getMinutes());
    return selectedDate.toISOString();
  }

  autoCapture() {
    this.question.value = this.dateSetting(Date.now());
    this.questionnaireForm.controls[this.question._id].patchValue(
      new Date(Date.now())
    );
    this.question.endTime = Date.now();;

  }

  get isValid(): boolean {
    return this.questionnaireForm.controls[this.question._id].valid;
  }

  get isTouched(): boolean {
    return this.questionnaireForm.controls[this.question._id].touched;
  }

  getValidationMessage(controlName: string): string {
    const control = this.questionnaireForm.get(controlName);
    if (control.errors) {
      const validationErrors = control.errors;
      if (validationErrors['err']) {
        return validationErrors['err'];
      }
    }
    return '';
  }
}