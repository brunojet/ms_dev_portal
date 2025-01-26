import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { RequestTableComponent } from './request-table.component';
import { ReusableTableComponent } from '../reusable-table/reusable-table.component';

describe('RequestTableComponent', () => {
  let component: RequestTableComponent<any>;
  let fixture: ComponentFixture<RequestTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestTableComponent, MatButtonModule, ReusableTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter data by "in-progress" status', () => {
    component.dataSource = [
      { status: 'Em Andamento' },
      { status: 'Encerrado' },
    ] as any;
    component.filter('in-progress');
    expect(component.filteredData).toEqual([{ status: 'Em Andamento' }]);
  });

  it('should filter data by "completed" status', () => {
    component.dataSource = [
      { status: 'Em Andamento' },
      { status: 'Encerrado' },
    ] as any;
    component.filter('completed');
    expect(component.filteredData).toEqual([{ status: 'Encerrado' }]);
  });

  it('should not filter data by other status', () => {
    component.dataSource = [
      { status: 'Em Andamento' },
      { status: 'Encerrado' },
    ] as any;
    component.filter('other');
    expect(component.filteredData).toEqual([
      { status: 'Em Andamento' },
      { status: 'Encerrado' },
    ]);
  });

  it('should call createNewRequest', () => {
    spyOn(console, 'log');
    component.createNewRequest();
    expect(console.log).toHaveBeenCalledWith('Criar novo pedido');
  });
});
