import { Component, EventEmitter, Input,OnInit, Output, SimpleChanges, booleanAttribute} from '@angular/core';
import {
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
  @Input({required:true}) assessment;
  @Input({transform:booleanAttribute}) angular = false;
  evidence: Evidence;
  sections: Section[];
  questionnaireForm: FormGroup;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  constructor(
    public fb: FormBuilder,
    public questionnaireService: QuestionnaireService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(this.angular && changes['assessment'] && changes['assessment'].previousValue == undefined && changes['assessment'].currentValue){
      this.assessment = this.questionnaireService.mapSubmissionToAssessment(this.assessment)
      this.evidence = this.assessment.assessment.evidences[0];
      this.evidence.startTime = Date.now();
      this.sections = this.evidence.sections;
      this.questions = this.sections[0].questions;
    }
  }
  ngOnInit() {
    if (typeof this.assessment === 'string') {
      try {
      this.assessment = JSON.parse(this.assessment);
      this.assessment = this.questionnaireService.mapSubmissionToAssessment(this.assessment)
      this.evidence = this.assessment.assessment.evidences[0];
      this.evidence.startTime = Date.now();
      this.sections = this.evidence.sections;
      this.questions = this.sections[0].questions
      } catch (error) {
        throw new Error('Invalid Assessment Structure', error);
      }
    }
    this.questionnaireForm = this.fb.group({});
  }

  submission(status) {
    const evidenceData = this.questionnaireService.getEvidenceData(
      this.evidence,
      this.questionnaireForm.value
    );

    status == 'save' ? (evidenceData['status'] = 'draft') : null;
    const dataToEmit = {
      status: status,
      data: evidenceData
    };
    
    console.log(dataToEmit);
    this.submitOrSaveEvent.emit(dataToEmit);
  }
}
