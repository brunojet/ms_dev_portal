import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { mainRoutes } from './main/main.routes';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  { path: 'main', children: mainRoutes, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
