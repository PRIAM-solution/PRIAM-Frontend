import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErasureRequestsComponent } from './erasure-requests.component';

describe('ErasureRequestsComponent', () => {
  let component: ErasureRequestsComponent;
  let fixture: ComponentFixture<ErasureRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErasureRequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErasureRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
