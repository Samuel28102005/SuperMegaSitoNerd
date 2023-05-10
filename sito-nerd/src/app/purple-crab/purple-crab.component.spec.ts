import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleCrabComponent } from './purple-crab.component';

describe('PurpleCrabComponent', () => {
  let component: PurpleCrabComponent;
  let fixture: ComponentFixture<PurpleCrabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurpleCrabComponent]
    });
    fixture = TestBed.createComponent(PurpleCrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
