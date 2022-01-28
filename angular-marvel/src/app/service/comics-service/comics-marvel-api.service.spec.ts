import { TestBed } from '@angular/core/testing';

import { ComicsMarvelApiService } from './comics-marvel-api.service';

describe('ComicsMarvelApiService', () => {
  let service: ComicsMarvelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsMarvelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
