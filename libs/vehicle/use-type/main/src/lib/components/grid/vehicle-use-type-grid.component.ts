import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, EventEmitter,
  Input, OnInit, Output
} from '@angular/core';

import { VehicleUseType } from '@zyweb/shared/data-access/model/lvms';
import { VehicleUseTypeGridPresenter } from './vehicle-use-type-grid.presenter';
import { GridComponentClass, SearchNgrxGridService } from '@zyweb/shared/grid/core';

@Component({
  selector: 'zyweb-wehicle-use-type-grid',
  templateUrl: './vehicle-use-type-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleUseTypeGridComponent extends GridComponentClass<VehicleUseType> {
  constructor( vehicleUseTypeGridPresenter: VehicleUseTypeGridPresenter,
               searchNgrxGridService: SearchNgrxGridService
  ) {
    super();
    this.gridPresenter = vehicleUseTypeGridPresenter;
    this.searchNgrxGridService = searchNgrxGridService
  }

}
