import { TestBed } from '@angular/core/testing';

import { MarvelApiService } from './marvel-api.service';

describe('MarvelApiService', () => {
  let service: MarvelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
