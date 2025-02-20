import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationDomainComponent } from './observation-domain.component';

describe('ObservationDomainComponent', () => {
  let component: ObservationDomainComponent;
  let fixture: ComponentFixture<ObservationDomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObservationDomainComponent]
    });
    fixture = TestBed.createComponent(ObservationDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
