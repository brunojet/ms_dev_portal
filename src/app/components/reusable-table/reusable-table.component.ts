import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TableColumn } from './reusable-table.model';
import { DeviceService } from '../../services/device.service';

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
  isInitialized: boolean = false;
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    if (this.deviceService.isMobileDevice()) {
      this.displayedColumns = [
        'createdAt',
        ...this.dynamicColumns.map((col) => col.columnDef),
        'status',
      ];
    } else {
      this.displayedColumns = [
        'createdAt',
        'updatedAt',
        ...this.dynamicColumns.map((col) => col.columnDef),
        'status',
        'author',
      ];
    }

    this.filter('in-progress');
    this.isInitialized = true;
  }

  @Input() tableTitle: string = 'Unknown';
  @Input() dataSource: T[] = [];
  @Input() dynamicColumns: TableColumn<T>[] = [];

  displayedColumns: string[] = [];
  filteredData: T[] = [];

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
