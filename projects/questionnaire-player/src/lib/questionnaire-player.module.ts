import { Injector, NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { TextInputComponent } from './components/text-input/text-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { CheckboxInputComponent } from './components/checkbox-input/checkbox-input.component';
import { DateInputComponent } from './components/date-input/date-input.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { RangeInputComponent } from './components/range-input/range-input.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [
    MainComponent,
    TextInputComponent,
    CheckboxInputComponent,
    DateInputComponent,
    NumberInputComponent,
    RadioInputComponent,
    RangeInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSliderModule
  ],
  exports: [
  ]
})
export class QuestionnairePlayerModule {
  constructor(private injector:Injector){
    const customMainElement = createCustomElement(MainComponent,{injector:this.injector});
    customElements.define('questionnaire-player-main',customMainElement);
  }

}
