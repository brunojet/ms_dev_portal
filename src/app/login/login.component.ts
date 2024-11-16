import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('LoginComponent initialized');
    if (this.authService.isLoggedIn()) {
      console.log('User already logged in');
      this.router.navigate(['/main']);
    }
  }

  onLogin(): void {
    console.log('Login clicked');
    this.authService.login(this.username, this.password).then((success) => {
      if (success) {
        console.log('User is logged in');
        this.router.navigate(['/main']);
      } else {
        alert('Login falhou. Usuário ou senha incorretos.');
      }
    });
  }
}
