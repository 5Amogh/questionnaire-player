import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Evidence, Question, ResponseType, Section } from '../../interfaces/questionnaire.type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'lib-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input({ required: true }) questions: Array<Question>;
  evidence: Evidence;
  @Input({ required: true }) questionnaireForm: FormGroup;
  @ViewChild('dialogCmp') childDialogComponent: DialogComponent;
  @Input() questionnaireInstance = false;
  @Input() fileUploadResponse;
  selectedIndex: number;
  dimmerIndex;
  isDimmed;

  pageSize = 1; //Each Question object from Question representing each page irrespective of number of questions it includes
  pageIndex = 0;
  hidePageSize = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;
  paginatorMap = new Map();
  paginatorLength: number;

  constructor(public fb: FormBuilder, public qService: QuestionnaireService) {}

  public get reponseType(): typeof ResponseType {
    return ResponseType;
  }

  ngOnInit(): void {
    this.paginatorLength = this.questions.length;
  }

  handlePageEvent(e) {
    if (this.questions[e.pageIndex] && !this.findNextVisibleQuestion(e.pageIndex, this.pageIndex)) {
      this.paginatorLength = this.pageIndex +1;
    }
  }

  private findNextVisibleQuestion(eventPageIndex: number, currentPageIndex: number): boolean {
    let step = 1;
    let endIndex = this.questions.length;
    if (currentPageIndex > eventPageIndex) {
      endIndex = 0;
      step = -1;
    }
    for (let i = eventPageIndex; this.questions[i]; i += step) {
      if (Array.isArray(this.questions[i].visibleIf) && this.questions[i].canDisplay
        || !Array.isArray(this.questions[i].visibleIf)) {
        this.pageIndex = i;
        return true;
      }
    }
    return false;
  }

  questionTrackBy(index, question) {
    return question._id;
  }

  openDialog(hint) {
    this.isDimmed = !this.isDimmed;
    this.childDialogComponent.hint = hint;
    this.childDialogComponent?.openDialog('300ms', '150ms');
  }

  toggleQuestion(parent) {
    const { children } = parent;
    this.questions.map((q, i) => {
      if (children.includes(q._id)) {
        let child = this.questions[i];
        child['canDisplay'] = this.canDisplayChildQ(child, i);
        if (child['canDisplay'] == false) {
          child.value = '';
          this.questionnaireForm.removeControl(child._id);
        }
      }
    });
    if(!this.questionnaireInstance){
      if(!this.findNextVisibleQuestion(this.pageIndex,this.questions.length)){
        this.paginatorLength = this.pageIndex + 1;
      }else{
        this.paginatorLength = this.questions.length;
      }
    }
   
  }

  canDisplayChildQ(currentQuestion: Question, currentQuestionIndex: number) {
    let display = true;
    if (typeof currentQuestion.visibleIf == 'string' || null || undefined) {
      return false; //if condition not present
    }
    for (const question of this.questions) {
      for (const condition of currentQuestion.visibleIf) {
        if (condition._id === question._id) {
          let expression = [];
          if (condition.operator != '===') {
            if (question.responseType === 'multiselect') {
              for (const parentValue of question.value) {
                for (const value of condition.value) {
                  expression.push(
                    '(',
                    "'" + parentValue + "'",
                    '===',
                    "'" + value + "'",
                    ')',
                    condition.operator
                  );
                }
              }
            } else {
              for (const value of condition.value) {
                expression.push(
                  '(',
                  "'" + question.value + "'",
                  '===',
                  "'" + value + "'",
                  ')',
                  condition.operator
                );
              }
            }
            expression.pop();
          } else {
            if (question.responseType === 'multiselect') {
              for (const value of question.value) {
                expression.push(
                  '(',
                  "'" + condition.value + "'",
                  '===',
                  "'" + value + "'",
                  ')',
                  '||'
                );
              }
              expression.pop();
            } else {
              expression.push(
                '(',
                "'" + question.value + "'",
                condition.operator,
                "'" + condition.value + "'",
                ')'
              );
            }
          }
          if (!eval(expression.join(''))) {
            this.questions[currentQuestionIndex].isCompleted = true;
            return false;
          } else {
            // this.questions[currentQuestionIndex].isCompleted =
            //   this.utils.isQuestionComplete(currentQuestion);
          }
        }
      }
    }
    return display;
  }

  closeHint() {
    this.isDimmed = false;
  }
}
