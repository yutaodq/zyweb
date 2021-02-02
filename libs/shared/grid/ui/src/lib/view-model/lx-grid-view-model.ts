
import { DataGridCommonOptions, DataGridOptionsUtil, IDataGridOptions } from '../options';
import { IGridColumnsBuilder, LOCALE_TEXT_GRID, SearchNgrxGridService } from '@zyweb/shared/grid/core';
import { COLUMN_DEFAULT_VALUE, ROW_HEIGHT } from '../options/column-default-value';
import { ActionsColumnRendererComponent, ButtonRenderedComponent } from '../components/renderer';


export abstract class LxGridViewModel<T>  {
  private _frameworkComponents = {
    buttonRendered: ButtonRenderedComponent,
    actionsColRendered: ActionsColumnRendererComponent
  };

  protected constructor() {
  }

    public get gridOptions(): IDataGridOptions {
    const gridOptions = DataGridOptionsUtil.getGridOptions(
      {
        // columnDefs: this.columnDefs(),
        defaultColDef: COLUMN_DEFAULT_VALUE,
        localeText: LOCALE_TEXT_GRID,
        frameworkComponents: this._frameworkComponents,
        context: { componentParent: this },
        cacheQuickFilter: true, // Quick Filter Cache
      },
      DataGridCommonOptions
    );
     gridOptions.rowHeight = ROW_HEIGHT;
     return gridOptions

   }
  protected abstract columnDefs(): [];

}

// 表头行高
const DEFAULT_HEADER_ROWS = 2;
