import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungRedDragonComponent } from './young-red-dragon.component';

describe('YoungRedDragonComponent', () => {
  let component: YoungRedDragonComponent;
  let fixture: ComponentFixture<YoungRedDragonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YoungRedDragonComponent]
    });
    fixture = TestBed.createComponent(YoungRedDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
