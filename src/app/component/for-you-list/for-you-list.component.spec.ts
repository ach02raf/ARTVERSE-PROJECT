import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForYouListComponent } from './for-you-list.component';

describe('ForYouListComponent', () => {
  let component: ForYouListComponent;
  let fixture: ComponentFixture<ForYouListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForYouListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForYouListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
