import { TestBed } from '@angular/core/testing';

import { EngrenagemService } from './engrenagem.service';

describe('EngrenagemService', () => {
  let service: EngrenagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngrenagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
