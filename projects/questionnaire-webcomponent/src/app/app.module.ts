import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionnairePlayerModule, MainWrapperComponent, ReportComponent,ObservationWrapperComponent } from 'questionnaire-player';

@NgModule({
  imports: [
    BrowserModule,
    QuestionnairePlayerModule
  ],
  providers: []
})
export class AppModule implements DoBootstrap { 
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const customMainElement = createCustomElement(MainWrapperComponent, {
      injector: this.injector
    });
    customElements.define('questionnaire-player-main', customMainElement);

    const customReportElement = createCustomElement(ReportComponent, {
      injector: this.injector
    });
    customElements.define('report-main', customReportElement);

    const customObservationElement = createCustomElement(ObservationWrapperComponent, {injector: this.injector});
 
    customElements.define('observation-player', customObservationElement);
  }


}
