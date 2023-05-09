import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalerComponent } from './signaler.component';

describe('SignalerComponent', () => {
  let component: SignalerComponent;
  let fixture: ComponentFixture<SignalerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
