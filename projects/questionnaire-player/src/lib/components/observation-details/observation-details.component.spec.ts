import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationDetailsComponent } from './observation-details.component';

describe('ObservationDetailsComponent', () => {
  let component: ObservationDetailsComponent;
  let fixture: ComponentFixture<ObservationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservationDetailsComponent]
    });
    fixture = TestBed.createComponent(ObservationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
