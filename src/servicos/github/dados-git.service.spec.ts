import { TestBed } from '@angular/core/testing';

import { DadosGitService } from './dados-git.service';

describe('DadosGitService', () => {
  let service: DadosGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
