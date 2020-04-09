import { TestBed } from '@angular/core/testing';

import { HomeCollectionService } from './home-collection.service';

describe('HomeCollectionService', () => {
  let service: HomeCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
