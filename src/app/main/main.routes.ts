import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRegistrationComponent } from './app-registration/app-registration.component';
import { AppPublicationComponent } from './app-publication/app-publication.component';
import { AuthGuard } from '../services/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        data: { title: 'Dashboard', icon: 'dashboard' },
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'app-registration',
        data: { title: 'Cadastro de Aplicativos', icon: 'app_registration' },
        component: AppRegistrationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'app-publication',
        data: { title: 'Publicação de Aplicativos', icon: 'publish' },
        component: AppPublicationComponent,
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
