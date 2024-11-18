import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpyObj },
      ],
    });

    guard = TestBed.inject(AuthGuard);
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow activation if user is logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should not allow activation if user is not logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    spyOn(window, 'alert');
    expect(guard.canActivate()).toBeFalse();
    expect(window.alert).toHaveBeenCalledWith(
      'Você precisa estar logado para acessar esta página.'
    );
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });
});
