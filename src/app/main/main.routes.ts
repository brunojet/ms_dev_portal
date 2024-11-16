import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { RequestAppRegistrationComponent } from '../components/app-registration/app-registration.component';
import { RequestAppPublicationComponent } from '../components/app-publication/app-publication.component';
import { AuthGuard } from '../services/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
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
        redirectTo: 'app-registration',
        pathMatch: 'full',
      },
    ],
  },
];
