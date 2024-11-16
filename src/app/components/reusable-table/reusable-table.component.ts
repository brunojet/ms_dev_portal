import { Component, Input, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TableColumn, TableColumns } from './reusable-table.model';
import { DeviceService } from '../../services/device.service';
import { UpdateModeEnum } from 'chart.js';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css'],
})
export class ReusableTableComponent<T extends TableColumns> implements OnInit {
  isInitialized: boolean = false;
  isMobile: boolean = false;
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobileDevice();

    this.displayedColumns = [
      'createdAt',
      'updatedAt',
      ...this.dynamicColumns.map((col) => col.columnDef),
      'status',
      'author',
    ];

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
