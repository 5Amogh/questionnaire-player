import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonHeaderComponent } from './common-header.component';

describe('CommonHeaderComponent', () => {
  let component: CommonHeaderComponent;
  let fixture: ComponentFixture<CommonHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonHeaderComponent]
    });
    fixture = TestBed.createComponent(CommonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
