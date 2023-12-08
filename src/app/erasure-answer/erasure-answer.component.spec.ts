import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasureAnswerComponent } from './erasure-answer.component';

describe('ErasureAnswerComponent', () => {
  let component: ErasureAnswerComponent;
  let fixture: ComponentFixture<ErasureAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErasureAnswerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErasureAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
