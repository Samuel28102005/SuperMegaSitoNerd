import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteMonsterComponent } from './white-monster.component';

describe('WhiteMonsterComponent', () => {
  let component: WhiteMonsterComponent;
  let fixture: ComponentFixture<WhiteMonsterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhiteMonsterComponent]
    });
    fixture = TestBed.createComponent(WhiteMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
