import { TestBed } from '@angular/core/testing';

import { PassCheckService } from './pass-check.service';

describe('PassCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassCheckService = TestBed.get(PassCheckService);
    expect(service).toBeTruthy();
  });
});
