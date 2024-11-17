export interface TableColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}

export interface TableColumns {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  author: string;
}
