import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Registration {
  creationDate: Date;
  updateDate: Date;
  appName: string;
  packageName: string;
  status: string;
  requestingUser: string;
}

@Component({
  selector: 'app-app-registration',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css'],
})
export class RequestAppRegistrationComponent implements OnInit {
  registrations: Registration[] = [
    { creationDate: new Date(), updateDate: new Date(), appName: 'App 1', packageName: 'com.example.app1', status: 'Em Andamento', requestingUser: 'User 1' },
    { creationDate: new Date(), updateDate: new Date(), appName: 'App 2', packageName: 'com.example.app2', status: 'Encerrado', requestingUser: 'User 2' },
    { creationDate: new Date(), updateDate: new Date(), appName: 'App 3', packageName: 'com.example.app3', status: 'Em Andamento', requestingUser: 'User 3' },
    { creationDate: new Date(), updateDate: new Date(), appName: 'App 4', packageName: 'com.example.app4', status: 'Encerrado', requestingUser: 'User 4' }
  ];
  filteredRegistrations: Registration[] = [];
  displayedColumns: string[] = ['creationDate', 'updateDate', 'appName', 'packageName', 'status', 'requestingUser'];

  ngOnInit(): void {
    this.filter('in-progress');
  }

  filter(status: string): void {
    if (status === 'in-progress') {
      this.filteredRegistrations = this.registrations.filter(reg => reg.status === 'Em Andamento');
    } else if (status === 'completed') {
      this.filteredRegistrations = this.registrations.filter(reg => reg.status === 'Encerrado');
    }
  }

  createNewRequest(): void {
    // Lógica para criar um novo pedido
    console.log('Criar novo pedido');
  }
}