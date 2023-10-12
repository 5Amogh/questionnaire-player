import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixQuestionsComponent } from './matrix-questions.component';

describe('MatrixQuestionsComponent', () => {
  let component: MatrixQuestionsComponent;
  let fixture: ComponentFixture<MatrixQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrixQuestionsComponent]
    });
    fixture = TestBed.createComponent(MatrixQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
