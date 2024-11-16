import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { mainRoutes } from './main/main.routes';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', children: mainRoutes, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];