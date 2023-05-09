import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeDetilesComponent } from './challange-detiles.component';

describe('ChallangeDetilesComponent', () => {
  let component: ChallangeDetilesComponent;
  let fixture: ComponentFixture<ChallangeDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallangeDetilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangeDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
