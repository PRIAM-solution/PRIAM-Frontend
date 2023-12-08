import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewErasureRequestComponent } from './new-erasure-request.component';

describe('NewErasureRequestComponent', () => {
  let component: NewErasureRequestComponent;
  let fixture: ComponentFixture<NewErasureRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewErasureRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewErasureRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
