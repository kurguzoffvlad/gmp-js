import { TestBed } from '@angular/core/testing';

import { GmpJsService } from './gmp-js.service';

describe('GmpJsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpJsService = TestBed.get(GmpJsService);
    expect(service).toBeTruthy();
  });
});
