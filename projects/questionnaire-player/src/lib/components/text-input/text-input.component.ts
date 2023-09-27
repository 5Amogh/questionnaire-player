import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Question } from '../../interfaces/questionnaire.type';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  text: string;
  @Input() questionnaireForm: FormGroup;
  @Input() question : Question;
  placeholder;

  constructor(public qService:QuestionnaireService) {}

  ngOnInit() {
    this.placeholder = 'Enter your response';
    setTimeout(() => {
      this.questionnaireForm.addControl(
        this.question._id,
        new FormControl(this.question.value || null, [
          this.qService.validate(this.question),
        ])
      );

      this.question.startTime = this.question.startTime
        ? this.question.startTime
        : Date.now();
    });
  }

  get isValid(): boolean {
    return this.questionnaireForm.controls[this.question._id].valid;
  }

  get isTouched(): boolean {
    return this.questionnaireForm.controls[this.question._id].touched;
  }
  onChange(e: Event) {
    let value = (e.target as HTMLInputElement).value;
    this.question.value = value;
    this.question.endTime = Date.now();
  }
}
