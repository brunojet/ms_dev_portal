import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';
import { ReusableTableColumn } from '../../components/reusable-table/reusable-table.model';
import { RequestTableColumns } from '../request-table/request-table.model';

@Component({
  selector: 'app-request-table',
  standalone: true,
  imports: [MatButtonModule, ReusableTableComponent],
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.css'],
})
export class RequestTableComponent<T extends RequestTableColumns>
  extends ReusableTableComponent<T>
  implements OnInit
{
  override filteredData: T[] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    this.filter('in-progress');
  }

  @Input() dataSource: T[] = [];

  override dynamicColumns: ReusableTableColumn<T>[] = [
    {
      columnDef: 'status',
      header: 'Estado',
      cell: (element: RequestTableColumns) => `${element.status}`,
    },
  ];

  filter(status: string): void {
    if (status === 'in-progress') {
      this.filteredData = this.dataSource.filter(
        (item) => item.status === 'Em Andamento'
      );
    } else if (status === 'completed') {
      this.filteredData = this.dataSource.filter(
        (item) => item.status === 'Encerrado'
      );
    } else {
      this.filteredData = this.dataSource;
    }
  }

  createNewRequest(): void {
    // Lógica para criar um novo pedido
    console.log('Criar novo pedido');
  }
}
