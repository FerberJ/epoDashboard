import { TestBed } from '@angular/core/testing';

import { GaugeService } from './gauge.service';

describe('GaugeService', () => {
  let service: GaugeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaugeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
