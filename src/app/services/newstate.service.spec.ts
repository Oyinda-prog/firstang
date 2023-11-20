import { TestBed } from '@angular/core/testing';

import { NewstateService } from './newstate.service';

describe('NewstateService', () => {
  let service: NewstateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewstateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
