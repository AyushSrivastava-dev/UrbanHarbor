import { TestBed } from '@angular/core/testing';

import { HttpAuthorizationInterceptorService } from './http-authorization-interceptor.service';

describe('HttpAuthorizationInterceptorService', () => {
  let service: HttpAuthorizationInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAuthorizationInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
