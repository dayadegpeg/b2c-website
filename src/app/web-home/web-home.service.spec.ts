import { TestBed } from '@angular/core/testing';

import { WebHomeService } from './web-home.service';

describe('WebHomeService', () => {
  let service: WebHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
