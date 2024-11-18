import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthGuard } from '../services/auth.guard';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRegistrationComponent } from './app-registration/app-registration.component';
import { AppPublicationComponent } from './app-publication/app-publication.component';
import { mainRoutes } from './main.routes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('Main Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(mainRoutes),
        MainComponent,
        DashboardComponent,
        AppRegistrationComponent,
        AppPublicationComponent,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: AuthGuard, useValue: { canActivate: () => true } },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should navigate to "dashboard" route', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('/dashboard');
  });

  it('should navigate to "app-registration" route', async () => {
    await router.navigate(['app-registration']);
    expect(location.path()).toBe('/app-registration');
  });

  it('should navigate to "app-publication" route', async () => {
    await router.navigate(['app-publication']);
    expect(location.path()).toBe('/app-publication');
  });

  it('should redirect to "dashboard" for empty path', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('/dashboard');
  });
});
