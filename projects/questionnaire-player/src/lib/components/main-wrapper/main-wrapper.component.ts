import { Component, EventEmitter, HostListener, Input, Output, SimpleChanges, booleanAttribute } from '@angular/core';
import {
  ApiConfiguration,
  Evidence,
  Question,
  Section,
} from '../../interfaces/questionnaire.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { SurveyService } from '../../services/survey.service';
@Component({
  selector: 'lib-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent {
  questions: Array<Question>;
  @Input({ required: true }) assessment;
  @Input({ required: true }) solutionId;
  @Input({ transform: booleanAttribute }) angular = false;
  @Input() fileSizeLimit;
  evidence: Evidence;
  sections: Section[];
  questionnaireForm: FormGroup;
  @Input() fileuploadresponse = null;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  @Input() apiConfig: ApiConfiguration;
  constructor(
    public fb: FormBuilder,
    public questionnaireService: QuestionnaireService,
    public surveyService: SurveyService,
  ) { }
  @HostListener('window:beforeunload')
  unloadNotification() {
    return this.confirmBeforeLeave();
  }

  @HostListener('window:popstate')
  popStateListener() {
    return this.confirmBeforeLeave();
  }

  confirmBeforeLeave(): boolean {
    if (this.questionnaireForm.dirty) {
      return confirm('Are you sure you want to leave?');
    }
    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fileuploadresponse']) {
      if (typeof this.fileuploadresponse === 'string') {
        this.fileuploadresponse = JSON.parse(this.fileuploadresponse);
      }
    }

    if (changes['apiConfig']) {
    this.surveyService?.setAuthToken(this.apiConfig);

    }

    if (this.angular && changes['solutionId'] && changes['solutionId'].previousValue == undefined && changes['solutionId'].currentValue) {
      this.fetchSurveyDetails(this.solutionId);
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
      } catch (error) {
        throw new Error('Invalid Assessment Structure', error);
      }
    }
    this.questionnaireForm = this.fb.group({});
  }

  private fetchSurveyDetails(solutionId: string): void {
    this.surveyService.fetchDetails(solutionId).subscribe(
      {
        next: (res: any) => {
          console.log('fetchSurveyDetails', res);
          if (res) {
            this.assessment = this.questionnaireService.mapSubmissionToAssessment(res)
            this.evidence = this.assessment.assessment.evidences[0];
            this.evidence.startTime = Date.now();
            this.sections = this.evidence.sections;
          } else {
            this.handleError('No result found in response');
          }
        },
        error: (error: any) => {
          this.handleError('Error fetching survey details');
        }
      }
    );
  }

  private handleError(message: string): void {
    console.error(message);
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
    this.submitOrSaveEvent.emit(dataToEmit);
  }
}
