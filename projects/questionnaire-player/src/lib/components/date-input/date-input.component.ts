import { Component, Input, OnInit } from '@angular/core';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Question, Validation } from '../../interfaces/questionnaire.type';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

  constructor(
    private qService: QuestionnaireService,
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

  onChange(event:MatDatepickerInputEvent<Date>) {
    if(!event.value) return
    const selectedDate = new Date((event.value));
    const tempDate = new Date();
    selectedDate.setHours(tempDate.getHours());
    selectedDate.setMinutes(tempDate.getMinutes());
    this.question.value = selectedDate.toISOString();
    this.question.endTime = Date.now();
  }

  autoCapture() {
    this.questionnaireForm.controls[this.question._id].patchValue(
      new Date(Date.now())
    );
  }
}