import { TestBed } from '@angular/core/testing';

import { HeroSuper } from './hero-super';

describe('HeroSuper', () => {
  let service: HeroSuper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSuper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
