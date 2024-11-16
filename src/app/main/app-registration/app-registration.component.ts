import { Component } from '@angular/core';
import { ReusableTableComponent } from '../components/reusable-table/reusable-table.component';
import {
  TableColumn,
  TableColumns,
} from '../components/reusable-table/reusable-table.model';

interface Registration extends TableColumns {
  appName: string;
  packageName: string;
}

@Component({
  selector: 'app-app-registration',
  standalone: true,
  imports: [ReusableTableComponent],
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css'],
})
export class AppRegistrationComponent extends ReusableTableComponent<Registration> {
  override dataSource: Registration[] = [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 1',
      packageName: 'com.example.app1',
      status: 'Em Andamento',
      author: 'User 1',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 2',
      packageName: 'com.example.app2',
      status: 'Encerrado',
      author: 'User 2',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 3',
      packageName: 'com.example.app3',
      status: 'Em Andamento',
      author: 'User 3',
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      appName: 'App 4',
      packageName: 'com.example.app4',
      status: 'Encerrado',
      author: 'User 4',
    },
  ];

  override dynamicColumns: TableColumn<Registration>[] = [
    {
      columnDef: 'appName',
      header: 'Nome do Aplicativo',
      cell: (element: Registration) => `${element.appName}`,
    },
    {
      columnDef: 'packageName',
      header: 'Nome do Pacote',
      cell: (element: Registration) => `${element.packageName}`,
    },
  ];
}
