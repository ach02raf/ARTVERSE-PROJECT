import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChallengeComponent } from './show-challenge.component';

describe('ShowChallengeComponent', () => {
  let component: ShowChallengeComponent;
  let fixture: ComponentFixture<ShowChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowChallengeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
