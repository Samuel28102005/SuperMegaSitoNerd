import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenSlimeComponent } from './green-slime.component';

describe('GreenSlimeComponent', () => {
  let component: GreenSlimeComponent;
  let fixture: ComponentFixture<GreenSlimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreenSlimeComponent]
    });
    fixture = TestBed.createComponent(GreenSlimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
