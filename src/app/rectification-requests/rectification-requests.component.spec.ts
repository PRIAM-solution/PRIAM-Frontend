import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectificationRequestsComponent } from './rectification-requests.component';

describe('RectificationRequestsComponent', () => {
  let component: RectificationRequestsComponent;
  let fixture: ComponentFixture<RectificationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectificationRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectificationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
