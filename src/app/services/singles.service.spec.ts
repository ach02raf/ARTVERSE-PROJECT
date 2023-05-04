import { TestBed } from '@angular/core/testing';

import { SinglesService } from './singles.service';

describe('SinglesService', () => {
  let service: SinglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
