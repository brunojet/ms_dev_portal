import { Component , OnInit} from '@angular/core';
import { RequestTableComponent } from '../../components/request-table/request-table.component';
import { ReusableTableColumn } from '../../components/reusable-table/reusable-table.model';
import { RequestTableColumns } from '../../components/request-table/request-table.model';

interface Publication extends RequestTableColumns {
  appName: string;
  appVersion: string;
  deviceModel: string;
}

@Component({
  selector: 'app-app-publication',
  standalone: true,
  imports: [RequestTableComponent],
  templateUrl: './app-publication.component.html',
  styleUrls: ['./app-publication.component.css'],
})
export class AppPublicationComponent extends RequestTableComponent<Publication> implements OnInit {
  override dataSource: Publication[] = [
    {
      title: 'App 1, versão 1.0.0, Model X',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 1',
      updatedBy: 'User 1',
      status: 'Em Andamento',
      appName: 'App 1',
      appVersion: '1.0.0',
      deviceModel: 'Model X',
    },
    {
      title: 'App 2, versão 1.1.0, Model Y',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 2',
      updatedBy: 'User 2',
      status: 'Encerrado',
      appName: 'App 2',
      appVersion: '1.1.0',
      deviceModel: 'Model Y',
    },
    {
      title: 'App 3, versão 2.0.0, Model Z',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 3',
      updatedBy: 'User 3',
      status: 'Em Andamento',
      appName: 'App 3',
      appVersion: '2.0.0',
      deviceModel: 'Model Z',
    },
    {
      title: 'App 4, versão 2.1.0, Model A',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'User 4',
      updatedBy: 'User 4',
      status: 'Encerrado',
      appName: 'App 4',
      appVersion: '2.1.0',
      deviceModel: 'Model A',
    },
  ];

  override ngOnInit(): void {
    super.ngOnInit();

    const additionalColumns: ReusableTableColumn<Publication>[] = [
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

    this.dynamicColumns = [...this.dynamicColumns, ...additionalColumns];
  }
}
