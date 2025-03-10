import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      // Simulação de resposta do backend
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          // Simulação de um token JWT
          const token = 'fake-jwt-token-for-admin';
          const groups = ['Admin'];
          localStorage.setItem('token', token);
          localStorage.setItem('userGroups', JSON.stringify(groups));
          resolve(true);
        } else if (username === 'dev' && password === 'dev') {
          const token = 'fake-jwt-token-for-dev';
          const groups = ['Dev'];
          localStorage.setItem('token', token);
          localStorage.setItem('userGroups', JSON.stringify(groups));
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000); // Simula um atraso de 1 segundo
    });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userGroups');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserGroups(): string[] {
    const groups = localStorage.getItem('userGroups');
    return groups ? JSON.parse(groups) : [];
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
