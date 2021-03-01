import { GridOptions } from 'ag-grid-community';

export interface IDataGridOptions extends GridOptions {
  headerRows?: number;
  rows?: number;
  height?: string;
  gridClass?: string;
  showTotal?: boolean;
  checkboxColumn?: boolean;
  enableRowDetail?: boolean;
}
