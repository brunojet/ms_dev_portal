import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      providers: [AuthService, { provide: Router, useValue: spy }],
    });
    service = TestBed.inject(AuthService);
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login as admin', async () => {
    const result = await service.login('admin', 'admin');
    expect(result).toBeTrue();
    expect(localStorage.getItem('token')).toBe('fake-jwt-token-for-admin');
    expect(localStorage.getItem('userGroups')).toBe(JSON.stringify(['Admin']));
  });

  it('should login as dev', async () => {
    const result = await service.login('dev', 'dev');
    expect(result).toBeTrue();
    expect(localStorage.getItem('token')).toBe('fake-jwt-token-for-dev');
    expect(localStorage.getItem('userGroups')).toBe(JSON.stringify(['Dev']));
  });

  it('should not login with invalid credentials', async () => {
    const result = await service.login('invalid', 'invalid');
    expect(result).toBeFalse();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('userGroups')).toBeNull();
  });

  it('should logout', () => {
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('userGroups', JSON.stringify(['Admin']));
    service.logout();
    expect(localStorage.getItem('token')).toBeNull();
    expect(localStorage.getItem('userGroups')).toBeNull();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should return true if logged in', () => {
    localStorage.setItem('token', 'fake-jwt-token');
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should return false if not logged in', () => {
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should return user groups', () => {
    localStorage.setItem('userGroups', JSON.stringify(['Admin', 'Dev']));
    expect(service.getUserGroups()).toEqual(['Admin', 'Dev']);
  });

  it('should return token', () => {
    localStorage.setItem('token', 'fake-jwt-token');
    expect(service.getToken()).toBe('fake-jwt-token');
  });

  it('should return null if no token is present', () => {
    expect(service.getToken()).toBeNull();
  });
});
