import { TestBed } from '@angular/core/testing';
import { Routes } from '@angular/router';
import { MainRouteService } from './main-route.service';
import { mainRoutes } from '../main/main.routes';

describe('MainRouteService', () => {
  let service: MainRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainRouteService],
    });
    service = TestBed.inject(MainRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return main routes', () => {
    const routes: Routes = service.getRoutes();
    expect(routes).toBe(mainRoutes);
  });
});
