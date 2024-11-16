import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

interface TableColumn {
  columnDef: string;
  header: string;
  cell: (element: any) => string;
}

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css'],
})
export class ReusableTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @Input() dynamicColumns: TableColumn[] = [];

  displayedColumns: string[] = [];

  filteredData: any[] = [];

  ngOnInit(): void {
    this.displayedColumns = [
      'createdAt',
      'updatedAt',
      ...this.dynamicColumns.map((col) => col.columnDef),
      'author',
    ];
    this.filteredData = this.dataSource;
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
    }
  }

  createNewRequest(): void {
    // Lógica para criar um novo pedido
    console.log('Criar novo pedido');
  }
}
