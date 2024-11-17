import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { mainRoutes } from '../main/main.routes';

@Injectable({
  providedIn: 'root',
})
export class MainRouteService {
  getRoutes(): Routes {
    return mainRoutes;
  }
}
