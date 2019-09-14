import { TestBed, inject } from '@angular/core/testing';

import { ProductnameService } from './productname.service';

describe('ProductnameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductnameService]
    });
  });

  it('should be created', inject([ProductnameService], (service: ProductnameService) => {
    expect(service).toBeTruthy();
  }));
});
