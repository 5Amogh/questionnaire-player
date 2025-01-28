import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionListingComponent } from './section-listing.component';

describe('SectionListingComponent', () => {
  let component: SectionListingComponent;
  let fixture: ComponentFixture<SectionListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionListingComponent]
    });
    fixture = TestBed.createComponent(SectionListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
