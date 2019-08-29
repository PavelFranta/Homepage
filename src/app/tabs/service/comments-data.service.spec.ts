import { TestBed } from '@angular/core/testing';

import { CommentsDataService } from './comments-data.service';

describe('CommentsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentsDataService = TestBed.get(CommentsDataService);
    expect(service).toBeTruthy();
  });
});
