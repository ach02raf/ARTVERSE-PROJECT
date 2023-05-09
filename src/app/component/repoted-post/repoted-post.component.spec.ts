import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepotedPostComponent } from './repoted-post.component';

describe('RepotedPostComponent', () => {
  let component: RepotedPostComponent;
  let fixture: ComponentFixture<RepotedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepotedPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepotedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
