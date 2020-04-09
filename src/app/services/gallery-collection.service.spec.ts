import { TestBed } from '@angular/core/testing';

import { GalleryCollectionService } from './gallery-collection.service';

describe('GalleryCollectionService', () => {
  let service: GalleryCollectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryCollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
