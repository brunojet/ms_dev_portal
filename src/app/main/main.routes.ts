import { Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main.component').then((m) => m.MainComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
        data: { title: 'Dashboard', icon: 'dashboard' },
        canActivate: [AuthGuard],
      },
      {
        path: 'app-registration',
        loadComponent: () =>
          import('./app-registration/app-registration.component').then(
            (m) => m.AppRegistrationComponent
          ),
        data: { title: 'Cadastro de Aplicativos', icon: 'app_registration' },
        canActivate: [AuthGuard],
      },
      {
        path: 'app-publication',
        loadComponent: () =>
          import('./app-publication/app-publication.component').then(
            (m) => m.AppPublicationComponent
          ),
        data: { title: 'Publicação de Aplicativos', icon: 'publish' },
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
];
