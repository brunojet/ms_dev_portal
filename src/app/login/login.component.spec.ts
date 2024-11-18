import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', [
      'isLoggedIn',
      'login',
    ]);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [LoginComponent, FormsModule],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: Router, useValue: routerSpyObj },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to /main if already logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(true);
    component.ngOnInit();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/main']);
  });

  it('should not redirect if not logged in', () => {
    authServiceSpy.isLoggedIn.and.returnValue(false);
    component.ngOnInit();
    expect(routerSpy.navigate).not.toHaveBeenCalled();
  });

  it('should login successfully and navigate to /main', async () => {
    authServiceSpy.login.and.returnValue(Promise.resolve(true));
    component.username = 'admin';
    component.password = 'admin';
    await component.onLogin();
    expect(authServiceSpy.login).toHaveBeenCalledWith('admin', 'admin');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/main']);
  });

  it('should fail to login and show alert', async () => {
    spyOn(window, 'alert');
    authServiceSpy.login.and.returnValue(Promise.resolve(false));
    component.username = 'invalid';
    component.password = 'invalid';
    await component.onLogin();
    expect(authServiceSpy.login).toHaveBeenCalledWith('invalid', 'invalid');
    expect(routerSpy.navigate).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'Login falhou. Usuário ou senha incorretos.'
    );
  });

  it('should handle login error', async () => {
    const consoleSpy = spyOn(console, 'error');
    authServiceSpy.login.and.returnValue(Promise.reject('Erro de login'));
    component.username = 'admin';
    component.password = 'admin';
    await component.onLogin();
    expect(consoleSpy).toHaveBeenCalledWith(
      'Erro ao fazer login:',
      'Erro de login'
    );
  });
});
