import { TestBed, inject } from '@angular/core/testing';

import { FromToServiceService } from './from-to-service.service';

describe('FromToServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FromToServiceService]
    });
  });

  it('should be created', inject([FromToServiceService], (service: FromToServiceService) => {
    expect(service).toBeTruthy();
  }));
});
