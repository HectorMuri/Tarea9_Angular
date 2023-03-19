import { TestBed } from '@angular/core/testing';

import { Hector } from './hector.service';

describe('Hector', () => {
  let service: Hector;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hector);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
