import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Question, Validation } from '../../interfaces/questionnaire.type';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Options } from '@angular-slider/ngx-slider/options';

@Component({
  selector: 'lib-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.css']
})
export class SliderInputComponent implements OnInit {
  @Input() questionnaireForm: FormGroup;
  @Input() question: Question;
  options: Options = {
    showTicksValues: true,
    floor:1,
    ceil:10
  };
  constructor(public qService:QuestionnaireService) {}

  ngOnInit() {
    setTimeout(() => {
      this.questionnaireForm.addControl(
        this.question._id,
        new FormControl(this.question.value || +this.min, [
          this.qService.validate(this.question),
        ])
      );
      this.question.startTime = this.question.startTime
        ? this.question.startTime
        : Date.now();
      this.question.value = this.question.value ? this.question.value : this.min;
    });
    this.max && (this.options['ceil'] = +this.max)
    this.min && (this.options['floor'] = +this.min)
    setTimeout(()=>{
      if(this.question.value){
        this.questionnaireForm.controls[this.question._id].reset(this.question.value);
      }else{
        if(((this.question.validation) as Validation).required){
            this.questionnaireForm.controls[this.question._id].reset(null);
        }
      }
    },100);
  }

  onChange(value) {
    this.question.value = value;
    this.question.endTime = Date.now();
  }

  get isValid(): boolean {
    return this.questionnaireForm.controls[this.question._id].valid;
  }

  get isTouched(): boolean {
    return this.questionnaireForm.controls[this.question._id].touched;
  }

  get min() {
    if (typeof this.question.validation == 'string') {
      return null;
    }
    return this.question.validation.min;
  }

  get max() {
    if (typeof this.question.validation == 'string') {
      return null;
    }
    return this.question.validation.max;
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
