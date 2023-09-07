import { TestBed } from '@angular/core/testing';

import { BoredomService } from './boredom.service';

describe('BoredomService', () => {
  let service: BoredomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoredomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
