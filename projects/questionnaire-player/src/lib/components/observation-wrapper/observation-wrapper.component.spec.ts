import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationWrapperComponent } from './observation-wrapper.component';

describe('ObservationWrapperComponent', () => {
  let component: ObservationWrapperComponent;
  let fixture: ComponentFixture<ObservationWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservationWrapperComponent]
    });
    fixture = TestBed.createComponent(ObservationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
