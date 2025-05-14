import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingPatientComponent } from './waiting-patient.component';

describe('WaitingPatientComponent', () => {
  let component: WaitingPatientComponent;
  let fixture: ComponentFixture<WaitingPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WaitingPatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
