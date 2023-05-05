import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackDragonComponent } from './black-dragon.component';

describe('BlackDragonComponent', () => {
  let component: BlackDragonComponent;
  let fixture: ComponentFixture<BlackDragonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackDragonComponent]
    });
    fixture = TestBed.createComponent(BlackDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
