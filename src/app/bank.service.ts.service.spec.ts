import { TestBed } from '@angular/core/testing';

import { BankServiceTsService } from './bank.service.ts.service';

describe('BankServiceTsService', () => {
  let service: BankServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
