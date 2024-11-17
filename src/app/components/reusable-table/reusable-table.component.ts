import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  ReusableTableColumn,
  ReusableTableColumns,
} from './reusable-table.model';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-reusable-table',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatButtonModule],
  templateUrl: './reusable-table.component.html',
  styleUrls: ['./reusable-table.component.css'],
})
export class ReusableTableComponent<T extends ReusableTableColumns>
  implements OnInit
{
  isInitialized: boolean = false;
  isMobile: boolean = false;
  displayedColumns: string[] = [];
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobileDevice();
    this.displayedColumns = this.dynamicColumns.map((col) => col.columnDef);
    this.isInitialized = true;
  }

  @Input() filteredData: T[] = [];
  @Input() dynamicColumns: ReusableTableColumn<T>[] = [];
}
