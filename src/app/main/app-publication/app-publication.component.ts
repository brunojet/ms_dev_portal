import { Component } from '@angular/core';
import { ReusableTableComponent } from '../components/reusable-table/reusable-table.component';
import {
  TableColumn,
  TableColumns,
} from '../components/reusable-table/reusable-table.model';

interface Publication extends TableColumns {
  appName: string;
  appVersion: string;
  deviceModel: string;
}

@Component({
  selector: 'app-app-publication',
  standalone: true,
  imports: [ReusableTableComponent],
  templateUrl: './app-publication.component.html',
  styleUrls: ['./app-publication.component.css'],
})
export class AppPublicationComponent extends ReusableTableComponent<Publication> {
  override dataSource: Publication[] = [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 1',
      appVersion: '1.0.0',
      deviceModel: 'Model X',
      status: 'Em Andamento',
      author: 'User 1',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 2',
      appVersion: '1.1.0',
      deviceModel: 'Model Y',
      status: 'Encerrado',
      author: 'User 2',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 3',
      appVersion: '2.0.0',
      deviceModel: 'Model Z',
      status: 'Em Andamento',
      author: 'User 3',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 4',
      appVersion: '2.1.0',
      deviceModel: 'Model A',
      status: 'Encerrado',
      author: 'User 4',
    },
  ];

  override dynamicColumns: TableColumn<Publication>[] = [
    {
      columnDef: 'appName',
      header: 'Nome do Aplicativo',
      cell: (element: Publication) => `${element.appName}`,
    },
    {
      columnDef: 'appVersion',
      header: 'Versão do Aplicativo',
      cell: (element: Publication) => `${element.appVersion}`,
    },
    {
      columnDef: 'deviceModel',
      header: 'Modelo do Dispositivo',
      cell: (element: Publication) => `${element.deviceModel}`,
    },
  ];
}
