import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { privateAreaGuard } from './private-area-guard';

describe('privateAreaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => privateAreaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
