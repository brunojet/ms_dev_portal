export interface TableColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}

export interface BaseTableColumns {
    createdAt: Date;
    updatedAt: Date;
    status: string;
    author: string;
}