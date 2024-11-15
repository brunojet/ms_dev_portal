import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RequestAppRegistrationComponent } from './components/request-app-registration/request-app-registration.component';
import { RequestAppPublicationComponent } from './components/request-app-publication/request-app-publication.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  {
    path: 'request-app-registration',
    component: RequestAppRegistrationComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'request-app-publication',
    component: RequestAppPublicationComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
