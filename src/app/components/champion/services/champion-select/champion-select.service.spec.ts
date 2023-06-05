import {TestBed} from '@angular/core/testing';

import {ChampionSelectService} from './champion-select.service';

describe('ChampionSelectService', () => {
  let service: ChampionSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionSelectService);
  });

  it('should be created', () => {
    expect(service)
        .toBeTruthy();
  });
});
