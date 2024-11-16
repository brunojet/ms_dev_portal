import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { RequestAppRegistrationComponent } from '../components/request-app-registration/request-app-registration.component';
import { RequestAppPublicationComponent } from '../components/request-app-publication/request-app-publication.component';
import { AuthGuard } from '../services/auth.guard';

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'request-app-registration',
        component: RequestAppRegistrationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'request-app-publication',
        component: RequestAppPublicationComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'request-app-registration',
        pathMatch: 'full'
      }
    ]
  }
];