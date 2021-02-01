import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { Vehicle, VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { GridPresenter } from './grid.presenter';

@Component({
  selector: 'zyweb-grid',
  templateUrl: './grid.component.html',
  providers: [ GridPresenter],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class GridComponent  {
  private _items: VehicleUseType[];

  @Input()
  public set items(value: VehicleUseType[]) {
    this._items = value;
  }

  public get items(): VehicleUseType[] {
    return this._items;
  }
  constructor(private gridPresenter: GridPresenter
  ) {
  }

}

