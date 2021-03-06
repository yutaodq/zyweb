import { Observable, Subject } from 'rxjs';

import { DataGridCommonOptions, DataGridOptionsUtil, IDataGridOptions } from '../options';
import {
  IGridColumnsBuilder,
  IGridOptionsModel,
  LOCALE_TEXT_GRID,
  SearchNgrxGridService
} from '@zyweb/shared/grid/core';
import { COLUMN_DEFAULT_VALUE, ROW_HEIGHT } from '../options/column-default-value';
import { ActionsColumnRendererComponent, ButtonRenderedComponent } from '../components/renderer';
import { Vehicle } from '@zyweb/shared/data-access/model/lvms';

export abstract class GridOptionsModel<T> implements IGridOptionsModel<T>{
  private select: Subject<T> = new Subject();
  select$: Observable<T> = this.select.asObservable();

  private _frameworkComponents = {
    buttonRendered: ButtonRenderedComponent,
    actionsColRendered: ActionsColumnRendererComponent
  };

  protected constructor() {
  }

  public gridOptions(): IDataGridOptions {
    const gridOptions = DataGridOptionsUtil.getGridOptions(
      {
        defaultColDef: COLUMN_DEFAULT_VALUE,
        localeText: LOCALE_TEXT_GRID,
        frameworkComponents: this._frameworkComponents,
        context: { componentParent: this },
        cacheQuickFilter: true // Quick Filter Cache
      },
      DataGridCommonOptions
    );
    gridOptions.rowHeight = ROW_HEIGHT;
    return gridOptions;

  }

  public onSelectData(params: any): void {
    this.select.next(params.rowData);
  }

  public abstract columnDefs();

}

// 表头行高
const DEFAULT_HEADER_ROWS = 2;
