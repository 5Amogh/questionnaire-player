import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  booleanAttribute,
} from '@angular/core';
import {
  ApiConfiguration,
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
export class MainWrapperComponent implements OnInit, OnChanges {
  questions: Array<Question>;
  @Input({ required: true }) assessment;
  @Input({ transform: booleanAttribute }) angular = false;
  @Input() fileSizeLimit;
  evidence: Evidence;
  sections: Section[];
  questionnaireForm: FormGroup;
  @Input() fileuploadresponse = null;
  @Output() submitOrSaveEvent = new EventEmitter<any>();
  @Input() apiConfig: ApiConfiguration;
  @ViewChild('questionMapModal') public questionMapModal: TemplateRef<any>;
  @ViewChild('mainComponent') public mainComponent: MainComponent;
  questionMap = {};
  pageMsg = new Map();
  endDate: Date;
  sectionName: string;
  listing = false;
  constructor(
    public fb: FormBuilder,
    private dialog: MatDialog,
    public questionnaireService: QuestionnaireService
  ) {}
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
      this.endDate = new Date(
        new Date(this.assessment.assessment.endDate).getTime() +
          new Date(this.assessment.assessment.endDate).getTimezoneOffset() *
            60000
      );
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
        this.endDate = new Date(
          new Date(this.assessment.assessment.endDate).getTime() +
            new Date(this.assessment.assessment.endDate).getTimezoneOffset() *
              60000
        );
        this.sections = this.evidence.sections;
      } catch (error) {
        throw new Error('Invalid Assessment Structure', error);
      }
    }
    this.questionnaireForm = this.fb.group({});
  }

  getQuestionMap() {
    for (
      let sectionIndex = 0;
      sectionIndex < this.sections.length;
      sectionIndex++
    ) {
      for (
        let questionIndex = 0;
        questionIndex < this.sections[sectionIndex].questions.length;
        questionIndex++
      ) {
        this.questionMap[
          `${this.sections[sectionIndex].name} - Page ${questionIndex + 1}`
        ] = [];
        if (
          this.sections[sectionIndex].questions[questionIndex].responseType ==
          'pageQuestions'
        ) {
          for (
            let pqIndex = 0;
            pqIndex <
            this.sections[sectionIndex].questions[questionIndex].pageQuestions
              .length;
            pqIndex++
          ) {
            if (
              (Array.isArray(
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].visibleIf
              ) &&
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].canDisplay) ||
              !Array.isArray(
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].visibleIf
              )
            ) {
              let value =
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].value;
              if (
                !this.questionnaireForm.controls[
                  this.sections[sectionIndex].questions[questionIndex]
                    .pageQuestions[pqIndex]._id
                ].valid
              ) {
                value = [];
              }
              if (
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].responseType == 'slider'
              ) {
                this.pageMsg.set(
                  `${this.sections[sectionIndex].name} - Page ${questionIndex + 1}`,
                  'Please review your response to the slider question on this page'
                );
              }
              this.setQuestionMap(
                sectionIndex,
                questionIndex,
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].validation,
                value,
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex]._id,
                this.sections[sectionIndex].questions[questionIndex]
                  .pageQuestions[pqIndex].questionNumber
              );
            }
          }
        } else {
          if (
            (Array.isArray(
              this.sections[sectionIndex].questions[questionIndex].visibleIf
            ) &&
              this.sections[sectionIndex].questions[questionIndex]
                .canDisplay) ||
            !Array.isArray(
              this.sections[sectionIndex].questions[questionIndex].visibleIf
            )
          ) {
            let value =
              this.sections[sectionIndex].questions[questionIndex].value;
            if (
              !this.questionnaireForm.controls[
                this.sections[sectionIndex].questions[questionIndex]._id
              ].valid
            ) {
              value = [];
            }
            if (
              this.sections[sectionIndex].questions[questionIndex]
                .responseType == 'slider'
            ) {
              this.pageMsg.set(
                `${this.sections[sectionIndex].name} - Page ${questionIndex + 1}`,
                'Please review your response to the slider question on this page'
              );
            }
            this.setQuestionMap(
              sectionIndex,
              questionIndex,
              this.sections[sectionIndex].questions[questionIndex].validation,
              value,
              this.sections[sectionIndex].questions[questionIndex]._id,
              this.sections[sectionIndex].questions[questionIndex]
                .questionNumber
            );
          }
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

  setQuestionMap(sectionIndex, qIndex, qValidation, qValue, questionId, qNum) {
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
      sectionName: this.sections[sectionIndex].name,
      pageIndex: qIndex,
      questionNumber: qNum,
    };
    this.questionMap[`${this.sections[sectionIndex].name} - Page ${qIndex + 1}`].push(
      question
    );
  }

  enableRelevantPage() {
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i].name !== this.sectionName) {
        this.domQuery(this.sections[i].name, 'none');
      }
    }
    console.log('in enable rel page',this.sectionName)
    this.domQuery(this.sectionName, 'block');
  }

  domQuery(elemendId: string, action: string) {
    if (document.getElementById(`${elemendId}`)) {
      document.getElementById(`${elemendId}`).style.display = action;
    }
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

  setSection(name: string) {
    this.sectionName = name;
    console.log(name)
    this.enableRelevantPage();
    let sectionElements = document.getElementsByClassName('section-listing');
    console.log(sectionElements)
    if (sectionElements.length > 0) {
      for (let i = 0; i < sectionElements.length; i++) {
        (sectionElements[i] as HTMLElement).style.display = 'none';
      }
    }
    this.listing = true;
  }

  backToSectionListing() {
    this.listing = false;
    this.domQuery(this.sectionName, 'none');
    let sectionElements = document.getElementsByClassName('section-listing');
    this.mainComponent.pageIndex = 1;
    if (sectionElements.length > 0) {
      for (let i = 0; i < sectionElements.length; i++) {
        (sectionElements[i] as HTMLElement).style.display = 'block';
      }
    }
  }

  closeModal() {
    this.dialog.closeAll();
  }

  goToQuestion(id, pageIndex,sectionName) {
    this.setSection(sectionName)
    console.log('id & page index', id, pageIndex);
    this.mainComponent.pageIndex = pageIndex;
    this.mainComponent.enableRelevantPage(id);
    this.closeModal();
  }
}
