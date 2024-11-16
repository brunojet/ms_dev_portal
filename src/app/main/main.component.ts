import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  isAdmin = false;
  isDev = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    console.log('MainComponent initialized');
    const groups = this.authService.getUserGroups();
    this.isAdmin = groups.includes('Admin');
    this.isDev = groups.includes('Dev');
  }
}
