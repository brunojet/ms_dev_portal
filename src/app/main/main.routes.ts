import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AppRegistrationComponent as AppRegistrationComponent } from './app-registration/app-registration.component';
import { AppPublicationComponent } from './app-publication/app-publication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../services/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'app-registration',
        component: AppRegistrationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'app-publication',
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