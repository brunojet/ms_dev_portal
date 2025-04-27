import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { mainRoutes } from './main/main.routes';
import { TermsGuard } from './services/terms.guard';

export const routes: Routes = [
  {
    path: 'terms',
    loadComponent:() => 
        import('./terms/terms-of-service.component').then((m) => m.TermsOfServiceComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  { path: 'main', children: mainRoutes, canActivate: [AuthGuard,TermsGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
