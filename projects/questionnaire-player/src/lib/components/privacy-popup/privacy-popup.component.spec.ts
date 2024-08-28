import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPopupComponent } from './privacy-popup.component';

describe('PrivacyPopupComponent', () => {
  let component: PrivacyPopupComponent;
  let fixture: ComponentFixture<PrivacyPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPopupComponent]
    });
    fixture = TestBed.createComponent(PrivacyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
