import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemarksComponent } from './remarks.component';

describe('RemarksComponent', () => {
  let component: RemarksComponent;
  let fixture: ComponentFixture<RemarksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemarksComponent]
    });
    fixture = TestBed.createComponent(RemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
