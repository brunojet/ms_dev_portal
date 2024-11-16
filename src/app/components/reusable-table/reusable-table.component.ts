import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

interface TableColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css'],
})
export class ReusableTableComponent<T extends { status: string }>
  implements OnInit
{
  @Input() dataSource: T[] = [];
  @Input() dynamicColumns: TableColumn<T>[] = [];

  displayedColumns: string[] = [];
  filteredData: T[] = [];

  ngOnInit(): void {
    this.displayedColumns = [
      'createdAt',
      'updatedAt',
      ...this.dynamicColumns.map((col) => col.columnDef),
      'status',
      'author',
    ];
    this.filter('in-progress');
  }

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
