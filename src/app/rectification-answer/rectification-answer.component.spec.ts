import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectificationAnswerComponent } from './rectification-answer.component';

describe('RectificationAnswerComponent', () => {
  let component: RectificationAnswerComponent;
  let fixture: ComponentFixture<RectificationAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectificationAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectificationAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
