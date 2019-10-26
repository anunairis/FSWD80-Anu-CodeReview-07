import { TestBed } from '@angular/core/testing';

import { HomePageHeroService } from './home-page-hero.service';

describe('HomePageHeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomePageHeroService = TestBed.get(HomePageHeroService);
    expect(service).toBeTruthy();
  });
});
