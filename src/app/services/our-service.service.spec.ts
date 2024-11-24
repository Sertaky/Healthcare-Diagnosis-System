import { TestBed } from '@angular/core/testing';

import { OurServiceService } from './our-service.service';

describe('OurServiceService', () => {
  let service: OurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
