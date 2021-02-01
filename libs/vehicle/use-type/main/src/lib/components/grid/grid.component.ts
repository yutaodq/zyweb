import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { Vehicle, VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { GridPresenter } from './grid.presenter';
import { IDataGridOptions } from '@zyweb/shared/grid/ui';

@Component({
  selector: 'zyweb-grid',
  templateUrl: './grid.component.html',
  providers: [ GridPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class GridComponent  {
  private _items: VehicleUseType[];

  constructor(private _gridPresenter: GridPresenter
  ) {
  }

   public get gridOptions(): IDataGridOptions {
    return this._gridPresenter.gridOptions;
  }
  public get columnDefs() {
    return this._gridPresenter.columnDefs;
  }

  @Input()
  public set items(value: VehicleUseType[]) {
    console.log(`在控制台打印:@Input() ` + value);
    this._items = value;
  }

  public get items(): VehicleUseType[] {
    return this._items;
  }
}

