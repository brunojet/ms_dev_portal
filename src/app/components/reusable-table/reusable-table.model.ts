export interface ReusableTableColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}

export interface ReusableTableColumns {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
}
