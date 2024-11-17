import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { DeviceService } from '../services/device.service';
import { MainRouteService } from '../services/main-route.service';

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
  menuItems: { path: string; title: string; icon: string }[] = [];

  constructor(
    private authService: AuthService,
    private deviceService: DeviceService,
    private routeService: MainRouteService
  ) {}

  ngOnInit(): void {
    const groups = this.authService.getUserGroups();
    this.isAdmin = groups.includes('Admin');
    this.isDev = groups.includes('Dev');
    this.isMobile = this.deviceService.isMobileDevice();
    this.generateMenuItems();
  }

  generateMenuItems(): void {
    const route: Route = this.routeService.getRoutes()[0];

    this.menuItems = route.children
      ? route.children
          .filter(
            (route: Route) =>
              route.path !== undefined &&
              route.data?.['title'] &&
              route.data?.['icon']
          )
          .map((route: Route) => {
            return {
              path: route.path!,
              title: route.data!['title'],
              icon: route.data!['icon'],
            };
          })
      : [];
  }

  closeSidenav(): void {
    if (this.isMobile) {
      this.sidenav.close();
    }
  }
}
