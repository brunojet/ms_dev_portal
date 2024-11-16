import { Component, OnInit, HostListener, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isAdmin = false;
  isDev = false;
  isMobile = false;

  constructor(
    private authService: AuthService,
    private deviceService: DeviceService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const groups = this.authService.getUserGroups();
    this.isAdmin = groups.includes('Admin');
    this.isDev = groups.includes('Dev');
    this.cdr.detectChanges();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isMobile = this.deviceService.isMobileDevice();
  }

  closeSidenav(): void {
    if (this.isMobile) {
      this.sidenav.close();
    }
  }
}
