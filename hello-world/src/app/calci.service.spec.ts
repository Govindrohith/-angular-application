import { TestBed } from '@angular/core/testing';

import { CalciService } from './calci.service';

describe('CalciService', () => {
  let service: CalciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
