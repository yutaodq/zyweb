import { Observable, Subject } from 'rxjs';
import { IDataGridOptions } from '../options';


export interface IGridOptionsModel<T> {
  select$: Observable<T> ;
  gridOptions(): IDataGridOptions;
  onSelectData(params: any): void;
  columnDefs();
}

