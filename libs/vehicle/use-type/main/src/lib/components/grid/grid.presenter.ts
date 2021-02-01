import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { VehicleUseTypeColumnsBuilder } from '../../grid/vehicle-use-type-columns.builder';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { IGridColumnsBuilder } from '@zyweb/shared/grid/core';
import { BaseGridViewModel, LxGridViewModel } from '@zyweb/shared/grid/ui';
import { VehicleUseTypeSearchNgrxGridService } from '@zyweb/shared/data-access/facade/lvms';


export class GridPresenter  {
  // export class GridPresenter extends LxGridViewModel<VehicleUseType> {

  // private readonly _gridColumnsBuilder: IGridColumnsBuilder;
  //
  //
  // constructor(searchNgrxGridService: VehicleUseTypeSearchNgrxGridService,
  //             vehicleColumnsBuilder: VehicleUseTypeColumnsBuilder
  // ) {
  //   super( searchNgrxGridService);
  //   this._gridColumnsBuilder = vehicleColumnsBuilder
  // }
  //
  // protected getGridColumnsBuilder(): IGridColumnsBuilder {
  //   return this._gridColumnsBuilder;
  // }
  //
  // protected registerFilterChangeHandlers(): void {
  // }
  //
  // protected getGridStateKey(): string {
  //   return 'aa'
  //   // return GridDataStateKeys.REASSIGN_CASE;
  // }
}

