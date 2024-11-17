import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  username: string | null = null;
  userGroups: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.updateUserInfo();
  }

  updateUserInfo(): void {
    if (this.authService.isLoggedIn()) {
      // Simulação de obtenção do nome de usuário
      const token = this.authService.getToken();
      if (token) {
        // Decodificar o token para obter o nome de usuário (simulação)
        this.username = token.includes('admin') ? 'admin' : 'dev';
      }
      this.userGroups = this.authService.getUserGroups();
    } else {
      this.username = null;
      this.userGroups = [];
    }
  }

  onLogout(): void {
    this.authService.logout();
    this.updateUserInfo();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
