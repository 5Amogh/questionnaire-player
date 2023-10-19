import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {
  AssessmentInfo,
  Evidence,
  Question,
  Section,
} from '../../interfaces/questionnaire.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'lib-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css'],
})
export class MainWrapperComponent implements OnInit {
  questions: Array<Question>;
  @Input() assessmentInfo: AssessmentInfo;
  evidence: Evidence;
  sections: Section[];
  questionnaireForm: FormGroup;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  constructor(
    public fb: FormBuilder,
    public questionnaireService: QuestionnaireService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('on change',this.assessmentInfo)
    if(changes['assessmentInfo'] && changes['assessmentInfo'].previousValue == undefined && changes['assessmentInfo'].currentValue){
      this.assessmentInfo = this.questionnaireService.mapSubmissionToAssessment(this.assessmentInfo)
      console.log('assessmentInfo inside the library', this.assessmentInfo);
      this.evidence = this.assessmentInfo.assessment.evidences[0];
      this.evidence.startTime = Date.now();
      this.sections = this.evidence.sections;
      this.questions = this.sections[0].questions;
    }
  }
  ngOnInit() {
    // if (typeof this.questions === 'string') {
    //   try {
    //     this.questions = JSON.parse(this.questions);
    //     console.log('questions',this.questions)
    //     if (!Array.isArray(this.questions)) {
    //       throw new Error(
    //         'Invalid Question Structure, Please configure questions to be an iterable'
    //       );
    //     }
    //   } catch (error) {
    //     throw new Error('Invalid Question Structure', error);
    //   }
    // }
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
