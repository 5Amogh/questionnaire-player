import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../../interfaces/questionnaire.type';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls:['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {
  @Input({ required: true }) questions: Array<Question>;
  questionnaireForm: FormGroup;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    if (typeof this.questions === 'string') {
      try {
        this.questions = JSON.parse(this.questions);
        if (!Array.isArray(this.questions)) {
          throw new Error(
            'Invalid Question Structure, Please configure questions to be an iterable'
          );
        }
      } catch (error) {
        throw new Error('Invalid Question Structure', error)
      }
    }
   this.questionnaireForm = this.fb.group({});
  }

  submission(status) {
    const dataToEmit = {
      status: status,
      data: this.questionnaireForm.value,
    };
    this.submitOrSaveEvent.emit(dataToEmit);
  }
}
