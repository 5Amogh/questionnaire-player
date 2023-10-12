import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent, QuestionnairePlayerModule } from 'questionnaire-player';

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
    const customMainElement = createCustomElement(MainComponent, {
      injector: this.injector,
    });
    customElements.define('questionnaire-player-main', customMainElement);
  }
}
