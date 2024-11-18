import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';
import { AuthService } from '../../services/auth.service';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', [
      'isLoggedIn',
      'getToken',
      'getUserGroups',
      'logout',
    ]);

    await TestBed.configureTestingModule({
      imports: [UserInfoComponent],
      providers: [{ provide: AuthService, useValue: authSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user info when logged in as admin', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    authServiceSpy.getToken.and.returnValue('fake-jwt-token-for-admin');
    authServiceSpy.getUserGroups.and.returnValue(['Admin']);

    component.updateUserInfo();

    expect(component.username).toBe('admin');
    expect(component.userGroups).toEqual(['Admin']);
  });

  it('should update user info when logged in as dev', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    authServiceSpy.getToken.and.returnValue('fake-jwt-token-for-dev');
    authServiceSpy.getUserGroups.and.returnValue(['Dev']);

    component.updateUserInfo();

    expect(component.username).toBe('dev');
    expect(component.userGroups).toEqual(['Dev']);
  });

  it('should clear user info when not logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);

    component.updateUserInfo();

    expect(component.username).toBeNull();
    expect(component.userGroups).toEqual([]);
  });

  it('should call logout and update user info on logout', () => {
    spyOn(component, 'updateUserInfo');
    component.onLogout();
    expect(authServiceSpy.logout).toHaveBeenCalled();
    expect(component.updateUserInfo).toHaveBeenCalled();
  });

  it('should return logged in status', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    expect(component.isLoggedIn()).toBeTrue();
    authServiceSpy.isLoggedIn.and.returnValue(false);
    expect(component.isLoggedIn()).toBeFalse();
  });
});
