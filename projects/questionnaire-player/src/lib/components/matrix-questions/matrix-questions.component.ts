import {
  Component,
  ContentChild,
  HostListener,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatrixQuestion, Question } from '../../interfaces/questionnaire.type';
import { UtilsService } from '../../services/utils.service';
import { AlertComponent } from '../alert/alert.component';
import { MatDialog } from '@angular/material/dialog';
export interface IContext {
  questions: Question[];
  heading: string;
  index: number;
}
@Component({
  selector: 'lib-matrix-questions',
  templateUrl: './matrix-questions.component.html',
  styleUrls: ['./matrix-questions.component.css'],
})
export class MatrixQuestionsComponent implements OnInit {
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.showBadgeAssingModel = false;
  }
  @ContentChild('libMainTemplateRef', { static: false })
  libMainTemplateRef: TemplateRef<any>;
  addText: string;
  submitText: string;
  cancelText: string;
  @Input() questionnaireForm: FormGroup;
  @Input() question: MatrixQuestion | any;
  matrixForm: FormGroup;
  @ViewChild('modal') public modalTemplate: TemplateRef<any>;
  context: IContext;
  showBadgeAssingModel: boolean;
  instanceLastUpdated: any[] = [];
  constructor(
    public fb: FormBuilder,
    private dialog: MatDialog,
    public utilService: UtilsService
  ) { }

  ngOnInit(): void {
    this.addText = 'Add';
    this.submitText = 'Submit';
    this.cancelText = 'Cancel';
    console.log('question from matrix',this.question)
    setTimeout(() => {
      this.matrixForm = this.fb.group({},Validators.required);
      this.questionnaireForm.addControl(
        this.question._id,
        new FormArray([], [Validators.required])
      );
      this.initializeMatrix();
    });
  }
  initializeMatrix() {
    if (this.question.value.length) {
      this.question.value.map((v) => {
        let obj = {};
        let endTime = [];
        v.forEach((ques) => {
          endTime.push(ques.endTime);
          if (!ques.value) return;
          obj[ques._id] = ques.value;
        });
        (this.questionnaireForm.controls[this.question._id] as FormArray).push(
          new FormControl(obj, [this.instanceValidation])
        );
        let instanceupdatedAt = endTime.reduce(function (x, y) {
          return x > y ? x : y;
        });
        this.instanceLastUpdated.push(instanceupdatedAt);
      });
    }
  }

  instanceValidation(control: FormControl) {
    let value = control.value;
    // TODO:ERROR TypeError: Cannot read properties of undefined (reading 'isEmpty') getting this that's why this code has been commented out, figure this issue out
    // if (this.isEmpty(value)) {
    //   return { err: 'Instance not filled' };
    // }
    return null;
  }

  isEmpty(value: any): boolean {
    if (value == null) {
      return true;
    }
    if (typeof value === 'string' && value.trim() === '') {
      return true;
    }

    if (Array.isArray(value) && value.length === 0) {
      return true;
    }
    if (typeof value === 'object' && Object.keys(value).length === 0) {
      return true;
    }
    return false;
  }

  addInstances(): void {
    this.question.value = this.question.value ? this.question.value : [];
    this.question.value.push(
      JSON.parse(JSON.stringify(this.question.instanceQuestions))
    );
    this.matrixForm.reset();
    this.formAsArray.push(new FormControl([], [Validators.required]));
  }

  viewInstance(i): void {
    this.matrixForm.reset();
    console.log('view instance before patching',this.matrixForm)
    console.log('forms array',this.formAsArray.controls[i])
    if (this.formAsArray.controls[i].value) {
      this.matrixForm.patchValue(this.formAsArray.controls[i].value);
    }
    console.log('view instance after patching',this.matrixForm)
    this.dialog.open(this.modalTemplate, {
      width: '100%',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
      disableClose: true,
      hasBackdrop:true
    });
    let deepClonedQuestion = structuredClone(this.question.value[i]);
    this.context = {
      questions: deepClonedQuestion,
      heading: `${this.question.instanceIdentifier} ${i + 1}`,
      index: i,
    };
    this.showBadgeAssingModel = true;
  }

  get formAsArray() {
    return this.questionnaireForm.controls[this.question._id] as FormArray;
  }

  matrixSubmit(index) {
    this.showBadgeAssingModel = false;
    this.question.value[index] = this.context.questions;
    this.formAsArray.at(index).patchValue(this.matrixForm.value);
    if (this.matrixForm.invalid) {
      this.formAsArray
        .at(index)
        .setErrors({ err: 'Matrix response is invalid' });
    }
    this.instanceLastUpdated[index] = Date.now();
    console.log('Matrix value',this.matrixForm.value);
    console.log('Questionnaire value',this.questionnaireForm.value);
    this.closeModal();
  }

  async deleteInstanceAlert(index) {
    const alertConfig = {
      title: 'Delete',
      message: 'Delete Submission?',
      acceptLabel: 'Yes',
      cancelLabel: 'No',
    };
    const dialogRef = this.dialog.open(AlertComponent, {
      data: alertConfig,
      width: 'auto',
      enterAnimationDuration: 300,
      exitAnimationDuration: 150,
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.question.value.splice(index, 1);
      (
        this.questionnaireForm.controls[this.question._id] as FormArray
      ).removeAt(index);
      this.instanceLastUpdated.splice(index, 1);
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
