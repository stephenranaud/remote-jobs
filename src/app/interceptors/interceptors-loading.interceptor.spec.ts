import { TestBed } from '@angular/core/testing';

import { InterceptorsLoadingInterceptor } from './interceptors-loading.interceptor';

describe('InterceptorsLoadingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorsLoadingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorsLoadingInterceptor = TestBed.inject(InterceptorsLoadingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
