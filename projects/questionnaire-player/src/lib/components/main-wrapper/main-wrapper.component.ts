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
import { ToastService } from '../../services/toast/toast.service';
@Component({
  selector: 'lib-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss']
})
export class MainWrapperComponent {
  questions: Array<Question>;
  assessment:any;
  @Input({ required: true }) solutionId;
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
    public toastService: ToastService
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

    if (changes['solutionId'] && changes['solutionId'].previousValue == undefined && changes['solutionId'].currentValue) {
      this.fetchSurveyDetails(this.solutionId);
    }
  }

  ngOnInit() {
    if (this.apiConfig) {
      this.surveyService?.setAuthToken(this.apiConfig);

    }

    if (this.solutionId) {
      this.fetchSurveyDetails(this.solutionId);
    }

    this.questionnaireForm = this.fb.group({});
  }

  private fetchSurveyDetails(solutionId: string): void {
    this.surveyService.fetchDetails(solutionId).subscribe(
      {
        next: (res: any) => {
          if (res) {
            this.assessment = this.questionnaireService.mapSubmissionToAssessment(res)
            this.evidence = this.assessment.assessment.evidences[0];
            this.evidence.startTime = Date.now();
            this.sections = this.evidence.sections;
          } else {
            this.toastService.showToast('No result found in response', 'error', 3000, 'top', 'end');
          }
        },
        error: (error: any) => {
          this.toastService.showToast('Error fetching survey details', 'error', 3000, 'top', 'end');
        }
      }
    );
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
