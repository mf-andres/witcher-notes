import { TestBed } from '@angular/core/testing';

import { TallNotesServiceService } from './tall-notes-service.service';

describe('TallNotesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TallNotesServiceService = TestBed.get(TallNotesServiceService);
    expect(service).toBeTruthy();
  });
});
