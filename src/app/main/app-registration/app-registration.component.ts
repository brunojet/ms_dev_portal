import { Component, OnInit } from '@angular/core';
import { RequestTableComponent } from '../../components/request-table/request-table.component';
import { ReusableTableColumn } from '../../components/reusable-table/reusable-table.model';
import { RequestTableColumns } from '../../components/request-table/request-table.model';

interface Registration extends RequestTableColumns {
  appName: string;
  packageName: string;
}

@Component({
  selector: 'app-app-registration',
  standalone: true,
  imports: [RequestTableComponent],
  templateUrl: './app-registration.component.html',
  styleUrls: ['./app-registration.component.css'],
})
export class AppRegistrationComponent
  extends RequestTableComponent<Registration>
  implements OnInit
{
  override dataSource: Registration[] = [
    {
      title: 'App 1, com.example.app3',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 1',
      updatedBy: 'User 1',
      status: 'Em Andamento',
      appName: 'App 1',
      packageName: 'com.example.app2',
    },
    {
      title: 'App 2, com.example.app2',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 2',
      updatedBy: 'User 2',
      status: 'Encerrado',
      appName: 'App 2',
      packageName: 'com.example.app2',
    },
    {
      title: 'App 3, com.example.app3',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 3',
      updatedBy: 'User 3',
      status: 'Em Andamento',
      appName: 'App 3',
      packageName: 'com.example.app3',
    },
    {
      title: 'App 4, com.example.app4',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 4',
      updatedBy: 'User 4',
      status: 'Encerrado',
      appName: 'App 4',
      packageName: 'com.example.app4',
    },
  ];

  override ngOnInit(): void {
    super.ngOnInit();

    const additionalColumns: ReusableTableColumn<Registration>[] = [
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

    this.dynamicColumns = [...this.dynamicColumns, ...additionalColumns];
  }
}
