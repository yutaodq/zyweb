import {
  ChangeDetectionStrategy,
  Component, Injectable,
  Input
} from '@angular/core';
import { VehicleUseTypeColumnsBuilder } from '../../grid/vehicle-use-type-columns.builder';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { IGridColumnsBuilder } from '@zyweb/shared/grid/core';
import { BaseGridViewModel, IDataGridOptions, LxGridViewModel } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';

// const COLUMN_DEFS_FILE  = require('./grid.json');
const COLUMN_DEFS_FILE  = "./grid.json";
@Injectable()
export class GridPresenter extends LxGridViewModel<VehicleUseType> {

  constructor(
  ) {
    super( );
  }
  public get columnDefs(): IDataGridOptions {
    return require('./grid.json');
  }

}

