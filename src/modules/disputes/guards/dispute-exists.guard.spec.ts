import { TestBed, async, inject } from '@angular/core/testing';

import { DisputeExistsGuard } from './dispute-exists.guard';

describe('DisputeExistsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisputeExistsGuard]
    });
  });

  it('should ...', inject([DisputeExistsGuard], (guard: DisputeExistsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
