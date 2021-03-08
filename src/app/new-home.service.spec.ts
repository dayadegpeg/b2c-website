import { TestBed } from '@angular/core/testing';

import { NewHomeService } from './new-home.service';

describe('NewHomeService', () => {
  let service: NewHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
