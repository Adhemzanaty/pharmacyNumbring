import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasafatComponent } from './wasafat.component';

describe('WasafatComponent', () => {
  let component: WasafatComponent;
  let fixture: ComponentFixture<WasafatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WasafatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasafatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
