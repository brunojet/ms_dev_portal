export interface TableColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}

export interface TableData<T> {
  dataSource: T[];
  dynamicColumns: TableColumn<T>[];
}
