import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class MainWrapperComponent implements OnInit{
  questions: Array<Question>;
  @Input({required:true}) assessmentInfo;
  @Input()tempQuestion;
  evidence: Evidence;
  sections: Section[];
  questionnaireForm: FormGroup;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  constructor(
    public fb: FormBuilder,
    public questionnaireService: QuestionnaireService
  ) {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   // console.log(changes);
  //   // console.log('on change',this.assessmentInfo)
  //   // if(changes['assessmentInfo'] && changes['assessmentInfo'].previousValue == undefined && changes['assessmentInfo'].currentValue){
  //   //   this.assessmentInfo = this.questionnaireService.mapSubmissionToAssessment(this.assessmentInfo)
  //   //   console.log('assessmentInfo inside the library', this.assessmentInfo);
  //   //   this.evidence = this.assessmentInfo.assessment.evidences[0];
  //   //   this.evidence.startTime = Date.now();
  //   //   this.sections = this.evidence.sections;
  //   //   this.questions = this.sections[0].questions;
  //   // }
  // }
  ngOnInit() {
    console.log('assessment on init',this.assessmentInfo)
    console.log('temp questions',this.tempQuestion);
    if (typeof this.assessmentInfo === 'string') {
      try {
        this.assessmentInfo = JSON.parse(this.assessmentInfo);
        console.log('questions',this.assessmentInfo)
      this.assessmentInfo = this.questionnaireService.mapSubmissionToAssessment(this.assessmentInfo)
      console.log('assessmentInfo inside the library', this.assessmentInfo);
      this.evidence = this.assessmentInfo.assessment.evidences[0];
      this.evidence.startTime = Date.now();
      this.sections = this.evidence.sections;
      this.questions = this.sections[0].questions
        if (!Array.isArray(this.questions)) {
          throw new Error(
            'Invalid Question Structure, Please configure questions to be an iterable'
          );
        }
      } catch (error) {
        throw new Error('Invalid Question Structure', error);
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
