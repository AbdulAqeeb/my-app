import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { notifyGuard } from './notify.guard';

describe('notifyGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => notifyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
