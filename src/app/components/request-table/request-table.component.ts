import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';
import { ReusableTableColumn } from '../../components/reusable-table/reusable-table.model';
import { RequestTableColumns } from '../request-table/request-table.model';
import { RequestFormComponent } from '../request-form/request-form.component';
import { DeviceService } from '../../services/device.service';

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
  constructor(private dialog: MatDialog, deviceService: DeviceService) {
    super(deviceService);
  }

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
    const dialogRef = this.dialog.open(RequestFormComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle the result here (e.g., save the new request)
        console.log('New request:', result);
      }
    });
  }
}
