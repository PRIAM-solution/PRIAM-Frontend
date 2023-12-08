import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRectificationRequestComponent } from './new-rectification-request.component';

describe('NewRectificationRequestComponent', () => {
  let component: NewRectificationRequestComponent;
  let fixture: ComponentFixture<NewRectificationRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRectificationRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRectificationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
