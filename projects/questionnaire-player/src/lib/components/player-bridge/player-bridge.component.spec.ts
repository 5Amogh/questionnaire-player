import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBridgeComponent } from './player-bridge.component';

describe('PlayerBridgeComponent', () => {
  let component: PlayerBridgeComponent;
  let fixture: ComponentFixture<PlayerBridgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerBridgeComponent]
    });
    fixture = TestBed.createComponent(PlayerBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
