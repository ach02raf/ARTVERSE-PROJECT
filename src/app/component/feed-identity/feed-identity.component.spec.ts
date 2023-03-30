import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedIdentityComponent } from './feed-identity.component';

describe('FeedIdentityComponent', () => {
  let component: FeedIdentityComponent;
  let fixture: ComponentFixture<FeedIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
