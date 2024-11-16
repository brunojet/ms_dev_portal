import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Publication {
  creationDate: Date;
  updateDate: Date;
  appName: string;
  appVersion: string;
  deviceModel: string;
  status: string;
  requestingUser: string;
}

@Component({
  selector: 'app-request-app-publication',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './app-publication.component.html',
  styleUrls: ['./app-publication.component.css'],
})
export class RequestAppPublicationComponent implements OnInit {
  publications: Publication[] = [
    {
      creationDate: new Date(),
      updateDate: new Date(),
      appName: 'App 1',
      appVersion: '1.0.0',
      deviceModel: 'Model X',
      status: 'Em Andamento',
      requestingUser: 'User 1',
    },
    {
      creationDate: new Date(),
      updateDate: new Date(),
      appName: 'App 2',
      appVersion: '1.1.0',
      deviceModel: 'Model Y',
      status: 'Encerrado',
      requestingUser: 'User 2',
    },
    {
      creationDate: new Date(),
      updateDate: new Date(),
      appName: 'App 3',
      appVersion: '2.0.0',
      deviceModel: 'Model Z',
      status: 'Em Andamento',
      requestingUser: 'User 3',
    },
    {
      creationDate: new Date(),
      updateDate: new Date(),
      appName: 'App 4',
      appVersion: '2.1.0',
      deviceModel: 'Model A',
      status: 'Encerrado',
      requestingUser: 'User 4',
    },
  ];
  filteredPublications: Publication[] = [];
  displayedColumns: string[] = [
    'creationDate',
    'updateDate',
    'appName',
    'appVersion',
    'deviceModel',
    'status',
    'requestingUser',
  ];

  ngOnInit(): void {
    this.filter('in-progress');
  }

  filter(status: string): void {
    if (status === 'in-progress') {
      this.filteredPublications = this.publications.filter(
        (pub) => pub.status === 'Em Andamento'
      );
    } else if (status === 'completed') {
      this.filteredPublications = this.publications.filter(
        (pub) => pub.status === 'Encerrado'
      );
    }
  }

  createNewRequest(): void {
    // Lógica para criar um novo pedido de publicação
    console.log('Criar novo pedido de publicação');
  }
}
