export interface TableColumn<T> {
  columnDef: string;
  header: string;
  cell: (element: T) => string;
}

export interface TableColumns {
    createdAt: Date;
    updatedAt: Date;
    title: string;
    status: string;
    author: string;
}