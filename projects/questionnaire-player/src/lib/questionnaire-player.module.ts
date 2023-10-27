import {
  LOCALE_ID,
  NgModule,
} from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { RangeInputComponent } from './components/range-input/range-input.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateInputValidatorDirective } from './directives/date-input-validator.directive';
import { RemarksComponent } from './components/remarks/remarks.component';
import { AttachmentComponent } from './components/attachment/attachment.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertComponent } from './components/alert/alert.component';
import { MatrixQuestionsComponent } from './components/matrix-questions/matrix-questions.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const MAT_CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMM YYYY',
    weekDayA11yLabel: 'ddd',
  },
};
@NgModule({
  declarations: [
    MainWrapperComponent,
    MainComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DateInputComponent,
    NumberInputComponent,
    RadioInputComponent,
    RangeInputComponent,
    DialogComponent,
    DateInputValidatorDirective,
    RemarksComponent,
    AttachmentComponent,
    AlertComponent,
    MatrixQuestionsComponent,
    SanitizeUrlPipe,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  exports: [],
  providers: [
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_CUSTOM_DATE_FORMATS,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: LOCALE_ID,
      useValue: 'en-in',
    },
  ]
})
export class QuestionnairePlayerModule {}
