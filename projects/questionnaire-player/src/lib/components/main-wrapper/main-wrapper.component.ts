import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import {
  Evidence,
  Question,
  Section,
} from '../../interfaces/questionnaire.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { MatDialog } from '@angular/material/dialog';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'lib-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
})
export class MainWrapperComponent {
  questions: Array<Question>;
  @Input({ required: true }) assessment;
  @Input({ transform: booleanAttribute }) angular = false;
  @Input() fileSizeLimit;
  evidence: Evidence;
  sections: Section[];
  questionnaireForm: FormGroup;
  @Input() fileuploadresponse = null;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  @ViewChild('questionMapModal') public questionMapModal: TemplateRef<any>;
  @ViewChild('mainComponent') public mainComponent: MainComponent;
  questionMap = {};
  pageMsg = new Map();
  endTime: Date;
  constructor(
    public fb: FormBuilder,
    private dialog: MatDialog,
    public questionnaireService: QuestionnaireService
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
    if (
      this.angular &&
      changes['assessment'] &&
      changes['assessment'].previousValue == undefined &&
      changes['assessment'].currentValue
    ) {
      this.assessment = this.questionnaireService.mapSubmissionToAssessment(
        this.assessment
      );
      this.evidence = this.assessment.assessment.evidences[0];
      this.evidence.startTime = Date.now();
      this.endTime = new Date(this.evidence.endTime)
      this.sections = this.evidence.sections;
    }
  }
  ngOnInit() {
    if (typeof this.assessment === 'string') {
      try {
        this.assessment = JSON.parse(this.assessment);
        this.assessment = this.questionnaireService.mapSubmissionToAssessment(
          this.assessment
        );
        this.evidence = this.assessment.assessment.evidences[0];
        this.evidence.startTime = Date.now();
        this.endTime = new Date(this.evidence.endTime)
        this.sections = this.evidence.sections;
      } catch (error) {
        throw new Error('Invalid Assessment Structure', error);
      }
    }
    this.questionnaireForm = this.fb.group({});
  }

  getQuestionMap() {
    for (
      let questionIndex = 0;
      questionIndex < this.sections[0].questions.length;
      questionIndex++
    ) {
      this.questionMap[`Page ${questionIndex + 1}`] = [];
      if (
        this.sections[0].questions[questionIndex].responseType ==
        'pageQuestions'
      ) {
        for (
          let pqIndex = 0;
          pqIndex <
          this.sections[0].questions[questionIndex].pageQuestions.length;
          pqIndex++
        ) {
          if((Array.isArray(this.sections[0].questions[questionIndex].pageQuestions[pqIndex]
            .visibleIf) && this.sections[0].questions[questionIndex].pageQuestions[pqIndex].canDisplay)
            || !Array.isArray(this.sections[0].questions[questionIndex].pageQuestions[pqIndex]
              .visibleIf)){
                let value = this.sections[0].questions[questionIndex].pageQuestions[pqIndex].value
               if(!this.questionnaireForm.controls[this.sections[0].questions[questionIndex].pageQuestions[pqIndex]._id].valid){
                value = []
               }
               if(this.sections[0].questions[questionIndex].pageQuestions[pqIndex].responseType == 'slider'){
                  this.pageMsg.set(`Page ${questionIndex+ 1}`, 'Please review your response to the slider question in this page');
               }

              this.setQuestionMap(
                questionIndex,
                this.sections[0].questions[questionIndex].pageQuestions[pqIndex]
                  .validation,
               value,
                this.sections[0].questions[questionIndex].pageQuestions[pqIndex]
                  ._id,
                this.sections[0].questions[questionIndex].pageQuestions[pqIndex]
                  .questionNumber
              );
            }
        }
      } else {
        if((Array.isArray(this.sections[0].questions[questionIndex].visibleIf) && this.sections[0].questions[questionIndex].canDisplay)
        || !Array.isArray(this.sections[0].questions[questionIndex].visibleIf)){
          let value = this.sections[0].questions[questionIndex].value
          if(!this.questionnaireForm.controls[this.sections[0].questions[questionIndex]._id].valid){
           value = []
          }
          if(this.sections[0].questions[questionIndex].responseType == 'slider'){
             this.pageMsg.set(`Page ${questionIndex+ 1}`, 'Please review your response to the slider question in this page');
          }
        this.setQuestionMap(
          questionIndex,
          this.sections[0].questions[questionIndex].validation,
          value,
          this.sections[0].questions[questionIndex]._id,
          this.sections[0].questions[questionIndex].questionNumber
        );
        }
      }
    }
    this.dialog.open(this.questionMapModal, {
      width: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
      disableClose: true,
      hasBackdrop: true,
    });
  }

  setQuestionMap(qIndex, qValidation, qValue, questionId, qNum) {
    const validation = qValidation;
    const value = qValue;
    const question = {
      _id: questionId,
      validity:
        (value && value.length > 0) || Number.isInteger(value)
          ? '#006600'
          : typeof validation !== 'string' && validation.required
            ? '#A30000'
            : '#595959',
      pageIndex: qIndex,
      questionNumber: qNum,
    };
    this.questionMap[`Page ${qIndex + 1}`].push(question);
  }

  submission(status) {
    const evidenceData = this.questionnaireService.getEvidenceData(
      this.evidence,
      this.questionnaireForm.value
    );

    status == 'save' ? (evidenceData['status'] = 'draft') : null;
    const dataToEmit = {
      status: status,
      data: evidenceData,
    };
    this.submitOrSaveEvent.emit(dataToEmit);
  }

  closeModal() {
    this.dialog.closeAll();
  }

  goToQuestion(id, pageIndex) {
    this.mainComponent.pageIndex = pageIndex;
    this.mainComponent.enableRelevantPage(id);
    this.closeModal();
  }
}
