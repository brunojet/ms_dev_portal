import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { DeviceService } from '../services/device.service';
import { MainRouteService } from '../services/main-route.service';
import { MainComponent } from './main.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;
  let deviceServiceSpy: jasmine.SpyObj<DeviceService>;
  let routeServiceSpy: jasmine.SpyObj<MainRouteService>;

  beforeEach(async () => {
    const authSpy = jasmine.createSpyObj('AuthService', ['getUserGroups']);
    const deviceSpy = jasmine.createSpyObj('DeviceService', ['isMobileDevice']);
    const routeSpy = jasmine.createSpyObj('MainRouteService', ['getRoutes']);

    await TestBed.configureTestingModule({
      imports: [
        MainComponent, // Importando o componente standalone diretamente
        MatSidenavModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: AuthService, useValue: authSpy },
        { provide: DeviceService, useValue: deviceSpy },
        { provide: MainRouteService, useValue: routeSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    authServiceSpy = TestBed.inject(AuthService) as jasmine.SpyObj<AuthService>;
    deviceServiceSpy = TestBed.inject(
      DeviceService
    ) as jasmine.SpyObj<DeviceService>;
    routeServiceSpy = TestBed.inject(
      MainRouteService
    ) as jasmine.SpyObj<MainRouteService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties on ngOnInit', () => {
    authServiceSpy.getUserGroups.and.returnValue(['Admin', 'Dev']);
    deviceServiceSpy.isMobileDevice.and.returnValue(true);
    routeServiceSpy.getRoutes.and.returnValue([
      {
        children: [
          {
            path: 'dashboard',
            data: { title: 'Dashboard', icon: 'dashboard' },
          },
          { path: 'settings', data: { title: 'Settings', icon: 'settings' } },
        ],
      },
    ]);

    component.ngOnInit();

    expect(component.isAdmin).toBeTrue();
    expect(component.isDev).toBeTrue();
    expect(component.isMobile).toBeTrue();
    expect(component.menuItems.length).toBe(2);
  });

  it('should generate menu items correctly', () => {
    routeServiceSpy.getRoutes.and.returnValue([
      {
        children: [
          {
            path: 'dashboard',
            data: { title: 'Dashboard', icon: 'dashboard' },
          },
          { path: 'settings', data: { title: 'Settings', icon: 'settings' } },
        ],
      },
    ]);

    component.generateMenuItems();

    expect(component.menuItems).toEqual([
      { path: 'dashboard', title: 'Dashboard', icon: 'dashboard' },
      { path: 'settings', title: 'Settings', icon: 'settings' },
    ]);
  });

  it('should close sidenav if isMobile is true', () => {
    component.isMobile = true;
    component.sidenav = { close: jasmine.createSpy('close') } as any;
    component.closeSidenav();
    expect(component.sidenav.close).toHaveBeenCalled();
  });

  it('should not close sidenav if isMobile is false', () => {
    component.isMobile = false;
    component.sidenav = { close: jasmine.createSpy('close') } as any;
    component.closeSidenav();
    expect(component.sidenav.close).not.toHaveBeenCalled();
  });
});
