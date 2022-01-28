import { TestBed } from '@angular/core/testing';

import { SeriesMarvelApiService } from './series-marvel-api.service';

describe('SeriesMarvelApiService', () => {
  let service: SeriesMarvelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesMarvelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
