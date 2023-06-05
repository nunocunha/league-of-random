import {TestBed} from '@angular/core/testing';

import {RoleSelectService} from './role-select.service';

describe('RoleSelectService', () => {
  let service: RoleSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleSelectService);
  });

  it('should be created', () => {
    expect(service)
        .toBeTruthy();
  });
});
