import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { RequestAppRegistrationComponent } from '../app-registration/app-registration.component';
import { RequestAppPublicationComponent } from '../app-publication/app-publication.component';
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
        component: RequestAppRegistrationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'app-publication',
        component: RequestAppPublicationComponent,
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