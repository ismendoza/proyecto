import { TestBed } from '@angular/core/testing';

import { ServiciosWebService } from './servicios-web.service';

describe('ServiciosWebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosWebService = TestBed.get(ServiciosWebService);
    expect(service).toBeTruthy();
  });
});
